import { useEffect, useRef, useState } from 'react';
import { nav } from '../content/site.js';
import Wordmark from './Wordmark.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  // Restrained sticky header: adds a backdrop once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: Escape closes and returns focus; closes if resized to desktop.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 900px)');
    const onMq = (e) => e.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    menuRef.current?.querySelector('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#top" aria-label="Vendora, back to top" onClick={close}>
          <Wordmark />
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a className="site-nav__link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--primary btn--sm site-header__cta" href={nav.cta.href}>
          {nav.cta.label}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a className="mobile-menu__link" href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--block" href={nav.cta.href} onClick={close}>
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
