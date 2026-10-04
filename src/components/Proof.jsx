import { proof } from '../content/site.js';
import SectionHead from './SectionHead.jsx';

/** Honest placeholders for proof the business does not have yet. */
export default function Proof() {
  return (
    <section id={proof.id} className="section proof" aria-labelledby="proof-title">
      <div className="container proof__grid">
        <SectionHead id="proof-title" eyebrow={proof.eyebrow} heading={proof.heading} intro={proof.intro} />
        <ul className="proof__slots">
          {proof.slots.map((s) => (
            <li className="proof__slot" key={s.title} data-reveal>
              <span className="proof__status label">{s.status}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
