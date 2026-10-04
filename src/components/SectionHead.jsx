/** Shared bracket label + heading + optional intro used by each section. */
export default function SectionHead({ id, eyebrow, heading, intro, className = '' }) {
  return (
    <div className={`section-head ${className}`} data-reveal>
      <p className="label label--bracket">{eyebrow}</p>
      <h2 id={id} className="section-title">
        {heading}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
