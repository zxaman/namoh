import Link from 'next/link';
import styles from './FeaturedProducts.module.css';
import Container from '@/components/ui/Container/Container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import { ArrowRightIcon } from '@/components/icons/Icons';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <section className={styles.section} id="featured-products">
      <Container>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Featured
            </div>
            <h2 className={styles.title}>Featured Products</h2>
            <p className={styles.subtitle}>Handpicked equipment for your commercial kitchen</p>
          </div>
          <Link href="/shop" className={styles.viewAll}>
            View All <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
