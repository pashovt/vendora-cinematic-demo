import { useRef, useState } from 'react';
import { locations, photos } from '../content/site.js';
import SectionHead from './SectionHead.jsx';
import Product from './products/Product.jsx';

/**
 * Accessible tabs (WAI-ARIA tabs pattern, automatic activation).
 * Each panel is photo-led: the location photograph with product models
 * resting on it, then the user need, what we'd plan around and the mix.
 */
export default function Locations({ onChooseSiteType }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const items = locations.items;

  const focusTab = (index) => {
    const next = (index + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: items.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      focusTab(keys[e.key]);
    }
  };

  return (
    <section id={locations.id} className="section locations theme-light band-light" aria-labelledby="locations-title">
      <div className="container">
        <SectionHead id="locations-title" eyebrow={locations.eyebrow} heading={locations.heading} intro={locations.intro} />

        <div className="locations__ui" data-reveal>
          <div className="locations__tabs" role="tablist" aria-label="Location types">
            {items.map((item, i) => {
              const selected = i === active;
              const p = photos[item.photo];
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  className="loc-tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                >
                  <img className="loc-tab__thumb" src={p.src} width="96" height="64" alt="" loading="lazy" decoding="async" />
                  <span className="loc-tab__index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="loc-tab__label">{item.label}</span>
                </button>
              );
            })}
          </div>

          {items.map((item) => {
            const p = photos[item.photo];
            return (
              <div
                key={item.id}
                id={`panel-${item.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${item.id}`}
                className="loc-panel"
                hidden={item.id !== items[active].id}
                tabIndex={0}
              >
                <figure className="loc-panel__photo">
                  <img src={p.src} width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
                  <figcaption className="loc-panel__place">
                    <span className="label">{item.label}</span>
                    <span className="loc-panel__credit">Illustrative photograph</span>
                  </figcaption>
                  <div className="loc-panel__products" aria-hidden="true">
                    {item.products.map((pr, i) => (
                      <div className="loc-panel__product" key={i} style={{ '--i': i }}>
                        <Product type={pr.type} variant={pr.variant} />
                      </div>
                    ))}
                  </div>
                </figure>

                <div className="loc-panel__body">
                  <p className="label loc-panel__kicker">User need</p>
                  <p className="loc-panel__need">{item.need}</p>
                  <p className="loc-panel__detail">{item.detail}</p>

                  <div className="loc-panel__cols">
                    <div>
                      <h3 className="label loc-panel__label">What we’d plan around</h3>
                      <ul className="loc-panel__list">
                        {item.considerations.map((m, i) => (
                          <li key={m}>
                            <span className="loc-panel__idx" aria-hidden="true">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="label loc-panel__label">Illustrative product mix</h3>
                      <ul className="loc-panel__list">
                        {item.mix.map((m, i) => (
                          <li key={m}>
                            <span className="loc-panel__idx" aria-hidden="true">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="loc-panel__disclaimer">{locations.mixDisclaimer}</p>

                  <a className="btn btn--primary" href="#enquiry" onClick={() => onChooseSiteType?.(item.siteType)}>
                    {item.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
