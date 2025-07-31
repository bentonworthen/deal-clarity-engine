import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
}

const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, subtitle, action, noPadding = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('dashboard-card', className)}
        {...props}
      >
        {(title || subtitle || action) && (
          <div className="flex items-center justify-between border-b border-border/20 p-6">
            <div>
              {title && (
                <h3 className="font-heading text-lg font-semibold">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
            {action && <div>{action}</div>}
          </div>
        )}
        <div className={cn(!noPadding && 'p-6')}>{children}</div>
      </div>
    );
  }
);

DashboardCard.displayName = 'DashboardCard';

export { DashboardCard, type DashboardCardProps };