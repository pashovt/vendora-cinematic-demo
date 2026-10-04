import { brand, footer } from '../content/site.js';
import Wordmark from './Wordmark.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Wordmark />
          <p className="site-footer__tag">{brand.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {footer.links.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer__meta">
          <p>{brand.contactPlaceholder}</p>
          <p className="site-footer__notice">{brand.demoNotice}</p>
        </div>
      </div>
      <p className="site-footer__giant" aria-hidden="true">
        {brand.name}
      </p>
    </footer>
  );
}
