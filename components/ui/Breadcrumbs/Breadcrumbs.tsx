import Link from 'next/link';
import styles from './Breadcrumbs.module.css';
import { ChevronRightIcon } from '@/components/icons/Icons';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <div key={i} className={styles.item}>
            {i > 0 && (
              <span className={styles.separator}>
                <ChevronRightIcon className="w-3.5 h-3.5" />
              </span>
            )}
            {isLast || !item.href ? (
              <span className={styles.current}>{item.label}</span>
            ) : (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
