import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryShowcase.module.css';
import Container from '@/components/ui/Container/Container';
import { ArrowRightIcon } from '@/components/icons/Icons';
import { categories } from '@/data/categories';

export default function CategoryShowcase() {
  // Show first 8 categories (excluding "Brands" if desired, or include all)
  const displayCategories = categories.slice(0, 8);

  return (
    <section className={styles.section} id="categories-showcase">
      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Categories
            <span className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.title}>Browse by Category</h2>
          <p className={styles.subtitle}>
            Find the right equipment for your commercial kitchen
          </p>
        </div>

        <div className={styles.grid}>
          {displayCategories.map((cat) => (
            <Link key={cat.id} href={`/shop/category/${cat.slug}`} className={styles.card}>
              {/* Background Image */}
              <div className={styles.cardImage}>
                <Image
                  src={cat.image || `https://picsum.photos/seed/${cat.slug}/600/800`}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Overlay */}
              <div className={styles.cardOverlay} />

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{cat.name}</h3>
                {cat.productCount && (
                  <p className={styles.cardCount}>{cat.productCount}+ Products</p>
                )}
                <div className={styles.cardArrow}>
                  See Collection
                  <span className={styles.cardArrowIcon}>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
