import { process } from '../content/site.js';
import SectionHead from './SectionHead.jsx';
import Product from './products/Product.jsx';

export default function Process() {
  return (
    <section id={process.id} className="section process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead id="process-title" eyebrow={process.eyebrow} heading={process.heading} />
        <div className="timeline-wrap">
          <div className="timeline__rail" aria-hidden="true">
            <span className="timeline__progress" data-progress />
            <span className="timeline__traveller" data-traveller>
              <Product type="can" variant="lime" />
            </span>
          </div>
          <ol className="timeline">
            {process.steps.map((s, i) => (
              <li className="timeline__step" key={s.title} data-reveal>
                <span className="timeline__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="timeline__title">
                  <span className="visually-hidden">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="timeline__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
