import Image from 'next/image';
import styles from './PageHero.module.css';
import Container from '@/components/ui/Container/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  breadcrumbs: BreadcrumbItem[];
  productCount?: number;
}

export default function PageHero({ title, description, image, breadcrumbs, productCount }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {image && (
        <div className={styles.bg}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} priority />
        </div>
      )}
      <div className={styles.overlay} />
      <Container>
        <div className={styles.content}>
          <div className={styles.breadcrumbs}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
          {productCount !== undefined && (
            <p className={styles.count}>{productCount} products</p>
          )}
        </div>
      </Container>
    </section>
  );
}
