import Product from './products/Product.jsx';

/**
 * Animated "restocking plan" illustration for the Service scope section:
 * a machine window whose slots fill row by row as it scrolls into view,
 * with a stock-level bar. Static (fully stocked) without motion.
 */
const ROWS = [
  [{ type: 'bottle' }, { type: 'bottle' }, { type: 'bottle' }, { type: 'bottle' }],
  [{ type: 'can', variant: 'coral' }, { type: 'can', variant: 'teal' }, { type: 'can', variant: 'lime' }, { type: 'can', variant: 'coral' }],
  [{ type: 'crisps', variant: 'amber' }, { type: 'crisps', variant: 'blue' }, { type: 'crisps', variant: 'amber' }, { type: 'crisps', variant: 'blue' }],
  [{ type: 'bowl' }, { type: 'bowl' }],
];

export default function RestockVisual() {
  return (
    <div className="restock" data-restock aria-hidden="true">
      <div className="restock__head">
        <span className="label">Restocking plan</span>
        <span className="label restock__tag">Illustrative</span>
      </div>
      <div className="restock__window">
        {ROWS.map((row, r) => (
          <div className={`restock__row restock__row--${row.length}`} key={r}>
            {row.map((p, i) => (
              <div className="restock__slot" key={i}>
                <div className="restock__item" data-restock-item>
                  <Product type={p.type} variant={p.variant} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="restock__foot">
        <span className="label">Stock level</span>
        <span className="restock__bar">
          <span data-restock-bar />
        </span>
      </div>
    </div>
  );
}
