'use client';

import styles from './ActiveFilterChips.module.css';
import { CloseIcon } from '@/components/icons/Icons';

interface ChipItem {
  key: string;
  label: string;
}

interface ActiveFilterChipsProps {
  chips: ChipItem[];
  onRemove: (key: string) => void;
  onClearAll: () => void;
}

export default function ActiveFilterChips({ chips, onRemove, onClearAll }: ActiveFilterChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div className={styles.wrap}>
      {chips.map((chip) => (
        <button key={chip.key} className={styles.chip} onClick={() => onRemove(chip.key)}>
          {chip.label}
          <span className={styles.chipClose}>
            <CloseIcon className="w-3 h-3" />
          </span>
        </button>
      ))}
      <button className={styles.clearAll} onClick={onClearAll}>
        Clear All
      </button>
    </div>
  );
}
