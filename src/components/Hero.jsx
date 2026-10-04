import { useRef } from 'react';
import { hero, images } from '../content/site.js';
import { useHeroSequence } from '../hooks/useHeroSequence.js';

/**
 * Hero. Static layout (mobile, reduced motion, or if GSAP fails):
 * centred copy, the machine, then the three statements as a list.
 * Desktop with motion: `useHeroSequence` pins the stage, raises the machine
 * and draws callouts that pin each statement to a part of the machine.
 */
export default function Hero() {
  const rootRef = useRef(null);
  useHeroSequence(rootRef);
  const img = images.heroMachine;

  return (
    <section id="top" className="hero" ref={rootRef} aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__light" data-hero-light />
        <div className="hero__floor" />
      </div>

      <div className="hero__stage container">
        <div className="hero__copy" data-hero-copy>
          <p className="label hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.headingLines.map((line, i) => (
              <span className="hero__line" key={line} style={{ '--i': i }}>
                <span className="hero__line-inner">{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero__lead">{hero.supporting}</p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <Arrow />
            </a>
            <a className="btn btn--ghost btn--lg" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="hero__small">{hero.smallPrint}</p>
        </div>

        <figure className="hero__machine" data-hero-machine>
          <div className="hero__machine-frame">
            <img
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
              fetchPriority="high"
              decoding="async"
            />
            {/* Decorative duplicates of the statements list; hidden from assistive tech. */}
            <div className="callouts" aria-hidden="true">
              {hero.callouts.map((c, i) => (
                <div
                  key={c.label}
                  className={`callout callout--${c.side}`}
                  style={{ '--x': `${c.x}%`, '--y': `${c.y}%` }}
                  data-callout
                >
                  <span className="callout__dot" data-callout-dot />
                  <span className="callout__line" data-callout-line />
                  <span className="callout__label" data-callout-label>
                    <span className="callout__kicker">
                      0{i + 1} / {c.label}
                    </span>
                    <span className="callout__text">{hero.statements[i]}</span>
                    <span className="callout__note">{c.note}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <figcaption className="hero__caption">{img.caption}</figcaption>
        </figure>

        <ol className="hero__statements" aria-label="What the service covers">
          {hero.statements.map((s, i) => (
            <li className="hero__statement" key={s}>
              <span className="hero__statement-index" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="hero__statement-text">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="hero__scroll-cue label" aria-hidden="true" data-hero-cue>
        Scroll
      </p>
    </section>
  );
}

export function Arrow() {
  return (
    <svg className="btn__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
