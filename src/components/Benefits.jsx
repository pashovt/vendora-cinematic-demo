import { benefits, decor } from '../content/site.js';
import Floaters from './products/Floaters.jsx';
import SectionHead from './SectionHead.jsx';

export default function Benefits() {
  const words = benefits.manifesto.split(' ');
  return (
    <section id={benefits.id} className="section benefits" aria-labelledby="benefits-title">
      <Floaters items={decor.benefits} />
      <div className="container">
        <SectionHead
          id="benefits-title"
          className="benefits__head"
          eyebrow={benefits.eyebrow}
          heading={benefits.heading}
        />

        <div className="manifesto" data-words>
          <p className="visually-hidden">{benefits.manifesto}</p>
          <p className="manifesto__text" aria-hidden="true">
            {words.map((w, i) => (
              <span key={i} data-word>
                {w}{' '}
              </span>
            ))}
          </p>
        </div>

        <div className="benefits__layout">
          <p className="benefits__intro" data-reveal>
            {benefits.intro}
          </p>
          <ol className="benefits__list">
            {benefits.items.map((item, i) => (
              <li className="benefit" key={item.title} data-reveal>
                <span className="benefit__num label" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="benefit__body">
                  <h3 className="benefit__title">{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <p className="benefit__detail label">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
