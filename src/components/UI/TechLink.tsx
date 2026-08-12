import React from 'react';
import { cn } from '../../utils/cn';

export interface TechLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  mono?: boolean;
  className?: string;
}

export const TechLink: React.FC<TechLinkProps> = ({
  href,
  children,
  external = false,
  mono = true,
  className,
  ...props
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors duration-200 cursor-pointer text-cyan-400 hover:text-cyan-300 group',
        'focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded-xs',
        mono ? 'font-mono text-xs uppercase tracking-wider' : 'font-sans text-sm',
        className
      )}
      {...props}
    >
      <span className="border-b border-cyan-500/40 group-hover:border-cyan-400 transition-colors pb-0.5">
        {children}
      </span>
      <span className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-xs">
        {external ? '↗' : '→'}
      </span>
    </a>
  );
};
