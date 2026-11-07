/**
 * Clementi, Op. 36 No. 1, first movement, measures 1–8.
 * Pitches, rhythms and 2/2 meter transcribed from the public-domain Mutopia edition:
 * https://www.mutopiaproject.org/ftp/ClementiM/O36/sonatina-1/sonatina-1.ly
 * Edition: Brian D. Rude, after Schirmer's 1893 Sonatina Album.
 * "Allegro" and the short phrase slurs are editorial presentation markings;
 * the source calls the movement "Spiritoso". No notes or rhythms are invented.
 * Tokens are pitch/octave:duration; r denotes a rest. # is an explicit sharp.
 */
export const CLEMENTI_OPENING = [
  { right: 'c/5:q e/5:8 c/5:8 g/4:q g/4:q', left: 'c/3:q r:q r:h' },
  { right: 'c/5:q e/5:8 c/5:8 g/4:q g/5:q', left: 'c/3:q r:q r:h' },
  { right: 'f/5:8 e/5:8 d/5:8 c/5:8 b/4:8 c/5:8 b/4:8 c/5:8', left: 'c/3:q r:q c/3:q r:q' },
  { right: 'd/5:8 c/5:8 b/4:8 a/4:8 g/4:q r:q', left: 'g/2:q r:q g/3:8 f/3:8 e/3:8 d/3:8' },
  { right: 'c/5:q e/5:8 c/5:8 g/4:q g/4:q', left: 'c/3:q r:q r:h' },
  { right: 'e/5:q g/5:8 e/5:8 c/5:q e/5:8 c/5:8', left: 'c/4:q r:q r:q f#/3:q' },
  { right: 'd/5:8 b/4:8 c/5:8 a/4:8 b/4:8 g/4:8 a/4:8 f#/4:8', left: 'g/3:q c/3:q d/3:q d/2:q' },
  { right: 'g/4:8 a/4:8 b/4:8 c/5:8 d/5:8 e/5:8 f#/5:8 g/5:8', left: 'g/2:q r:q r:h' },
] as const;

export const SCORE_COLORS: Record<string, string> = {
  c: '#e0292e', d: '#f28014', e: '#efc400', f: '#33b83d',
  g: '#00adc7', a: '#245bea', b: '#b838db',
};
