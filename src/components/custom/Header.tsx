import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, title, subtitle, actions, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'flex h-16 items-center justify-between border-b border-border/20 bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {title && (
            <h1 className="font-heading text-xl font-semibold tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </header>
    );
  }
);

Header.displayName = 'Header';

export { Header, type HeaderProps };