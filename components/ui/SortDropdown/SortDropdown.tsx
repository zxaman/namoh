'use client';

import styles from './SortDropdown.module.css';
import { ChevronDownIcon } from '@/components/icons/Icons';
import { SORT_OPTIONS } from '@/constants';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className={styles.wrap}>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort products"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className={styles.chevron}>
        <ChevronDownIcon className="w-4 h-4" />
      </span>
    </div>
  );
}
