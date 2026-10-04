import { brand } from '../content/site.js';

/** Text wordmark with a small machine glyph. Swap for a logo file later. */
export default function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`}>
      <svg className="wordmark__glyph" viewBox="0 0 20 28" aria-hidden="true" focusable="false">
        <rect x="1.5" y="1.5" width="17" height="25" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="4.5" y="5" width="7" height="13" rx="1" fill="currentColor" opacity=".3" />
        <rect x="13.5" y="6" width="2.5" height="2.5" rx=".6" className="wordmark__dot" />
        <rect x="5" y="21" width="10" height="2" rx="1" className="wordmark__dot" />
      </svg>
      <span className="wordmark__text">{brand.name}</span>
    </span>
  );
}
