import React from 'react';
import styles from './Badge.module.css';
import { cn } from '@/utils/cn';

type BadgeVariant = 'sale' | 'new' | 'hot' | 'bestseller' | 'outOfStock';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[variant], className)}>
      {children}
    </span>
  );
}
