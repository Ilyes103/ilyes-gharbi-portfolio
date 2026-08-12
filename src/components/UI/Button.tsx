import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const variantStyles = {
    primary:
      'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold border border-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-500 shadow-sm',
    outline:
      'bg-transparent hover:bg-cyan-950/40 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 hover:text-cyan-300',
    ghost:
      'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white border border-transparent'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-6 py-3 text-sm sm:text-base gap-2.5'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer select-none rounded-sm',
        'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]',
        'focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
        fullWidth && 'w-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="w-4 h-4 flex items-center justify-center shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="w-4 h-4 flex items-center justify-center shrink-0">{icon}</span>
      )}
    </button>
  );
};
