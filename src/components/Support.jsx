import { support } from '../content/site.js';

/** Support principle + the fault route, in the cinematic dark style. */
export default function Support() {
  return (
    <section id={support.id} className="section support" aria-labelledby="support-title">
      <div className="container">
        <p className="label label--bracket" data-reveal>
          {support.eyebrow}
        </p>
        <figure className="support__quote" data-reveal>
          <blockquote>
            <p id="support-title">{support.statement}</p>
          </blockquote>
          <figcaption className="label">{support.attribution}</figcaption>
        </figure>
        <h3 className="support__steps-title" data-reveal>
          {support.stepsHeading}
        </h3>
        <ol className="support__steps">
          {support.steps.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="support__num label" aria-hidden="true">
                0{i + 1}
              </span>
              <strong>{s.title}</strong>
              <span>{s.body}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
