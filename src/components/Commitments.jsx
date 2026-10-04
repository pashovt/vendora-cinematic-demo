import { commitments, decor } from '../content/site.js';
import SectionHead from './SectionHead.jsx';
import Floaters from './products/Floaters.jsx';

export default function Commitments() {
  return (
    <section id={commitments.id} className="section commitments" aria-labelledby="commitments-title">
      <Floaters items={decor.commitments} />
      <div className="container">
        <SectionHead id="commitments-title" eyebrow={commitments.eyebrow} heading={commitments.heading} intro={commitments.intro} />
        <ol className="commitments__grid">
          {commitments.items.map((c, i) => (
            <li className="commitment" key={c.title} data-reveal>
              <span className="commitment__num label" aria-hidden="true">
                0{i + 1}
              </span>
              <h3 className="commitment__title">{c.title}</h3>
              <p>{c.body}</p>
            </li>
          ))}
        </ol>
        <p className="commitments__note label" data-reveal>
          {commitments.note}
        </p>
      </div>
    </section>
  );
}
