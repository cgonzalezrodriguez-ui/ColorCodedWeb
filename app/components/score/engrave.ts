import { CLEMENTI_OPENING, SCORE_COLORS } from './clementi';

/** Engrave once, then clone the SVG so both appearances share exact geometry. */
export async function engraveScore(host: HTMLDivElement, coloredHost: HTMLDivElement) {
  const VF = await import('vexflow/bravura');
  await document.fonts.ready;
  host.replaceChildren();
  coloredHost.replaceChildren();
  const width = 1120;
  const renderer = new VF.Renderer(host, VF.Renderer.Backends.SVG);
  renderer.resize(width, 420);
  const context = renderer.getContext();
  context.setFillStyle('#191713').setStrokeStyle('#191713');

  for (let row = 0; row < 2; row++) {
    let x = 30;
    const y = 12 + row * 210;
    for (let bar = 0; bar < 4; bar++) {
      const index = row * 4 + bar;
      const first = bar === 0;
      const measureWidth = first ? 295 : 261;
      const upper = new VF.Stave(x, y, measureWidth);
      const lower = new VF.Stave(x, y + 92, measureWidth);
      if (first) {
        upper.addClef('treble');
        lower.addClef('bass');
        if (row === 0) {
          upper.addTimeSignature('2/2');
          lower.addTimeSignature('2/2');
        }
      }
      upper.setContext(context).draw();
      lower.setContext(context).draw();
      if (first) {
        new VF.StaveConnector(upper, lower).setType('brace').setContext(context).draw();
        new VF.StaveConnector(upper, lower).setType('singleLeft').setContext(context).draw();
      }
      new VF.StaveConnector(upper, lower).setType('singleRight').setContext(context).draw();
      const makeNotes = (tokens: string, clef: string) => tokens.split(' ').map(token => {
        const [pitch, duration] = token.split(':');
        const rest = pitch === 'r';
        const note = new VF.StaveNote({
          clef, keys: [rest ? (clef === 'bass' ? 'd/3' : 'b/4') : pitch],
          duration: duration + (rest ? 'r' : ''), autoStem: true,
        });
        if (pitch.includes('#')) note.addModifier(new VF.Accidental('#'), 0);
        return note;
      });
      const right = makeNotes(CLEMENTI_OPENING[index].right, 'treble');
      const left = makeNotes(CLEMENTI_OPENING[index].left, 'bass');
      const rightVoice = new VF.Voice({ numBeats: 2, beatValue: 2 }).addTickables(right);
      const leftVoice = new VF.Voice({ numBeats: 2, beatValue: 2 }).addTickables(left);
      const beams = [...VF.Beam.generateBeams(right), ...VF.Beam.generateBeams(left)];
      new VF.Formatter().joinVoices([rightVoice]).joinVoices([leftVoice]).formatToStave([rightVoice, leftVoice], upper);
      rightVoice.draw(context, upper);
      leftVoice.draw(context, lower);
      beams.forEach(beam => beam.setContext(context).draw());
      if ([0, 1, 4, 5].includes(index)) {
        new VF.Curve(right[0], right[2], { cps: [{ x: 0, y: 12 }, { x: 0, y: 12 }], position: VF.Curve.Position.NEAR_HEAD, positionEnd: VF.Curve.Position.NEAR_HEAD, openingDirection: 'down' }).setContext(context).draw();
      }
      // Mark only notehead groups. Stems, flags, beams and accidentals remain black.
      for (const note of [...right, ...left]) {
        if (note.isRest()) continue;
        const pitch = note.getKeys()[0][0];
        note.noteHeads[0].getSVGElement()?.setAttribute('data-note-color', SCORE_COLORS[pitch]);
      }
      x += measureWidth;
    }
  }
  const svg = host.querySelector('svg')!;
  svg.setAttribute('viewBox', `0 0 ${width} 420`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  svg.setAttribute('aria-hidden', 'true');
  svg.removeAttribute('width');
  svg.removeAttribute('height');
  const colored = svg.cloneNode(true) as SVGSVGElement;
  colored.querySelectorAll<SVGElement>('[data-note-color]').forEach(head => {
    const color = head.dataset.noteColor!;
    // VexFlow nests accidentals inside notehead groups; color only the direct glyph.
    const glyph = head.querySelector<SVGElement>(':scope > text, :scope > path');
    if (glyph) {
      glyph.setAttribute('fill', color);
      if (glyph.getAttribute('stroke') && glyph.getAttribute('stroke') !== 'none') glyph.setAttribute('stroke', color);
    }
  });
  // IDs are only used during engraving. Remove them to keep cloned SVGs valid.
  [svg, colored].forEach(root => root.querySelectorAll('[id]').forEach(element => element.removeAttribute('id')));
  coloredHost.append(colored);
}
