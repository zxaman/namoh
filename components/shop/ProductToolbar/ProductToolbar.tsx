'use client';

import styles from './ProductToolbar.module.css';
import SortDropdown from '@/components/ui/SortDropdown/SortDropdown';
import { MenuIcon } from '@/components/icons/Icons';

interface ProductToolbarProps {
  total: number;
  showing: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  onOpenFilters: () => void;
  filterCount: number;
}

export default function ProductToolbar({
  total,
  showing,
  sortValue,
  onSortChange,
  onOpenFilters,
  filterCount,
}: ProductToolbarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <button className={styles.filterBtn} onClick={onOpenFilters}>
          <MenuIcon className="w-4 h-4" />
          Filters
          {filterCount > 0 && <span className={styles.filterBadge}>{filterCount}</span>}
        </button>
        <p className={styles.count}>
          Showing <strong>{showing}</strong> of <strong>{total}</strong> products
        </p>
      </div>
      <div className={styles.right}>
        <SortDropdown value={sortValue} onChange={onSortChange} />
      </div>
    </div>
  );
}
