import React from 'react';
import { cn } from '@/lib/utils';

interface StatusPillProps {
  status: 'b2b' | 'b2c' | 'reverse-charge';
  className?: string;
  children: React.ReactNode;
}

const StatusPill = ({ status, className, children }: StatusPillProps) => {
  const statusClasses = {
    'b2b': 'status-b2b',
    'b2c': 'status-b2c',
    'reverse-charge': 'status-reverse-charge',
  };

  return (
    <span className={cn('status-pill', statusClasses[status], className)}>
      {children}
    </span>
  );
};

export { StatusPill, type StatusPillProps };