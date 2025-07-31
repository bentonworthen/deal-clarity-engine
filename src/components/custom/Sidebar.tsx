import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  isActive?: boolean;
  isCollapsed?: boolean;
  badge?: string | number;
}

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, icon, children, isActive, isCollapsed, badge, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent/50',
          isActive && 'bg-accent/50 font-medium text-accent-foreground',
          isCollapsed && 'justify-center px-2',
          className
        )}
        {...props}
      >
        {icon && (
          <span className={cn('h-5 w-5', isActive && 'text-accent-foreground')}>
            {icon}
          </span>
        )}
        {!isCollapsed && (
          <>
            <span>{children}</span>
            {badge && (
              <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                {badge}
              </span>
            )}
          </>
        )}
      </a>
    );
  }
);

SidebarItem.displayName = 'SidebarItem';

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, isCollapsed = false, onToggle, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'flex flex-col border-r border-border/20 bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60',
          isCollapsed ? 'w-16' : 'w-64',
          'transition-all duration-300',
          className
        )}
        {...props}
      >
        <div className="flex h-16 items-center justify-between border-b border-border/20 px-4">
          {!isCollapsed && (
            <span className="font-heading text-lg font-semibold">Logo</span>
          )}
          <button
            onClick={onToggle}
            className="rounded-lg p-1.5 hover:bg-accent/50"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <svg
              className={cn('h-5 w-5 transition-transform', 
                isCollapsed && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 space-y-1 p-2">{children}</nav>
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export { Sidebar, SidebarItem, type SidebarProps, type SidebarItemProps };