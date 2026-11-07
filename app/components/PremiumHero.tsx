
export default function PremiumHero() {

  return (
    <section className="cc-hero" aria-labelledby="cc-hero-title">
      <div className="cc-hero-inner">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow"><span aria-hidden="true" /> A more visual way into music</p>
          <h1 id="cc-hero-title">Read piano music<br />in <span className="cc-color-word">color.</span></h1>
          <p className="cc-hero-description">Reading sheet music is hard for beginners. ColorCoded makes it visual - so you spend less time decoding and more time playing.</p>
          <div className="cc-hero-actions">
            <a className="cc-download" href="https://apps.apple.com/us/app/colorcoded-music/id6759799607" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.54c.03 3.22 2.82 4.3 2.85 4.31-.02.08-.45 1.53-1.47 3.02-.89 1.29-1.81 2.58-3.26 2.6-1.43.03-1.89-.84-3.53-.84-1.63 0-2.14.81-3.5.87-1.4.05-2.47-1.4-3.36-2.69-1.83-2.64-3.23-7.46-1.35-10.72a5.2 5.2 0 0 1 4.4-2.67c1.37-.03 2.67.93 3.51.93.84 0 2.42-1.15 4.08-.98.7.03 2.65.28 3.9 2.11-.1.06-2.33 1.35-2.3 4.06ZM14.36 4.6c.74-.9 1.24-2.15 1.1-3.4-1.07.04-2.36.71-3.13 1.61-.69.79-1.3 2.05-1.14 3.27 1.19.09 2.42-.61 3.17-1.48Z" /></svg>
              Download for iPhone
            </a>
            <a className="cc-see-how" href="#how-it-works">See how it works <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
          </div>
          <p className="cc-availability">Available on the App Store for iPhone</p>
        </div>

      </div>
    </section>
  );
}
