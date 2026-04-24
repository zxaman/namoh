import styles from './RelatedProducts.module.css';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import type { Product } from '@/types';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Related Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
