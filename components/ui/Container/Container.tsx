import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export default function Container({
  children,
  as: Component = 'div',
  className,
}: ContainerProps) {
  return (
    <Component className={cn('max-w-7xl mx-auto px-4 lg:px-6', className)}>
      {children}
    </Component>
  );
}
