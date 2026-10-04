import { serviceScope } from '../content/site.js';
import SectionHead from './SectionHead.jsx';
import RestockVisual from './RestockVisual.jsx';

export default function ServiceScope() {
  const { options } = serviceScope;
  return (
    <section id={serviceScope.id} className="section scope theme-light band-light" aria-labelledby="scope-title">
      <div className="container">
        <div className="scope__top">
          <SectionHead
            id="scope-title"
            eyebrow={serviceScope.eyebrow}
            heading={serviceScope.heading}
            intro={serviceScope.intro}
          />
          <div className="scope__visual">
            <RestockVisual />
            <p className="scope__note" data-reveal>
              {serviceScope.note}
            </p>
          </div>
        </div>

        <ol className="scope__grid">
          {serviceScope.steps.map((s, i) => (
            <li className="scope__item" key={s.title} data-reveal>
              <span className="scope__letter" aria-hidden="true">
                {String.fromCharCode(65 + i)}
              </span>
              <h3 className="scope__title">{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        <aside className="scope__options" aria-labelledby="scope-options-title" data-reveal>
          <div className="scope__options-head">
            <h3 id="scope-options-title" className="scope__options-title">
              {options.heading}
            </h3>
            <p>{options.body}</p>
          </div>
          <dl className="scope__options-list">
            {options.items.map((o) => (
              <div key={o.title}>
                <dt>{o.title}</dt>
                <dd>{o.body}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
