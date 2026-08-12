import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'panel' | 'outline' | 'interactive';
  notch?: boolean;
  headerAccent?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  notch = false,
  headerAccent = false,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-[#0f172a] border border-[#1e293b] text-slate-200',
    panel: 'bg-[#121b2d] border border-[#1e293b] text-slate-200',
    outline: 'bg-transparent border border-[#1e293b] text-slate-200',
    interactive:
      'bg-[#0f172a] border border-[#1e293b] hover:border-cyan-500/40 hover:bg-[#152238] text-slate-200 transition-all duration-300 cursor-pointer hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
  };

  return (
    <div
      className={cn(
        'relative rounded-md p-5 sm:p-6 transition-colors duration-200 overflow-hidden',
        notch && 'corner-notch',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {headerAccent && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/80 via-blue-500/40 to-transparent" />
      )}
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props}>
    {children}
  </div>
);

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, ...props }) => (
  <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight text-white font-sans', className)} {...props}>
    {children}
  </h3>
);

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ children, className, ...props }) => (
  <p className={cn('text-xs sm:text-sm text-slate-400 font-mono tracking-wide', className)} {...props}>
    {children}
  </p>
);

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => (
  <div className={cn('text-sm text-slate-300 leading-relaxed font-sans space-y-3', className)} {...props}>
    {children}
  </div>
);

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className, ...props }) => (
  <div className={cn('mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono', className)} {...props}>
    {children}
  </div>
);
