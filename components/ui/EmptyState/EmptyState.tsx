import React from 'react';
import styles from './EmptyState.module.css';
import { SearchIcon } from '@/components/icons/Icons';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  children?: React.ReactNode; // action buttons
}

export default function EmptyState({ icon, title, description, children }: EmptyStateProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.icon}>
        {icon || <SearchIcon className="w-8 h-8" />}
      </div>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {children && <div className={styles.actions}>{children}</div>}
    </div>
  );
}
