import { ctaBand, decor } from '../content/site.js';
import Floaters from './products/Floaters.jsx';

/** Oversized text-link call to action between the process and FAQ. */
export default function CtaBand() {
  return (
    <section className="cta-band" aria-label="Discuss your site">
      <Floaters items={decor.cta} />
      <div className="container cta-band__inner" data-reveal>
        <p className="label label--bracket">{ctaBand.kicker}</p>
        <p className="cta-band__lead">{ctaBand.lead}</p>
        <a className="cta-band__link" href={ctaBand.link.href}>
          <span>{ctaBand.link.label}</span>
          <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path d="M8 24h30M27 12l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </section>
  );
}
