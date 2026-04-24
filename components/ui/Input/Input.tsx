import React from 'react';
import styles from './Input.module.css';
import { cn } from '@/utils/cn';
import type { InputVariant } from '@/types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({
  variant = 'contact',
  label,
  error,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrap}>
        {icon && <span className={styles.iconLeft}>{icon}</span>}
        <input
          id={inputId}
          className={cn(
            styles.input,
            styles[variant],
            error && styles.hasError,
            className
          )}
          {...props}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
