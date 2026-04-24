'use client';

import Link from 'next/link';
import styles from './CategoryNav.module.css';
import Container from '@/components/ui/Container/Container';
import { ChevronDownIcon } from '@/components/icons/Icons';
import { categories } from '@/data/categories';

export default function CategoryNav() {
  return (
    <nav className={styles.nav} aria-label="Product categories" id="category-nav">
      <Container>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/shop/category/${category.slug}`} className={styles.link}>
                <span>{category.name}</span>
                {category.slug !== 'brands' && (
                  <ChevronDownIcon className={`w-3 h-3 ${styles.chevron}`} />
                )}
                <span className={styles.underline} />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
