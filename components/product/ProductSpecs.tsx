import styles from './ProductSpecs.module.css';

interface ProductSpecsProps {
  specifications?: Record<string, string>;
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  const entries = specifications ? Object.entries(specifications) : [];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Specifications</h2>

      {entries.length > 0 ? (
        <div className={styles.table}>
          {entries.map(([key, value]) => (
            <div key={key} className={styles.row}>
              <div className={styles.label}>{key}</div>
              <div className={styles.value}>{value}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          Specifications are not available for this product. Contact us for detailed information.
        </p>
      )}
    </section>
  );
}
