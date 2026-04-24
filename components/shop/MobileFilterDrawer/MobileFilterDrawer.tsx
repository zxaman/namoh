'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MobileFilterDrawer.module.css';
import { CloseIcon } from '@/components/icons/Icons';
import FilterSidebar from '@/components/shop/FilterSidebar/FilterSidebar';
import Button from '@/components/ui/Button/Button';
import type { FilterState } from '@/types';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  activeCount: number;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  onChange,
  onClear,
  activeCount,
}: MobileFilterDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Filters</h2>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close filters">
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className={styles.body}>
              <FilterSidebar
                filters={filters}
                onChange={onChange}
                onClear={onClear}
                activeCount={activeCount}
              />
            </div>
            <div className={styles.footer}>
              <Button variant="ghost" size="md" fullWidth onClick={onClear}>
                Reset
              </Button>
              <Button variant="primary" size="md" fullWidth onClick={onClose}>
                Apply ({activeCount})
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
