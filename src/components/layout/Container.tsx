import React from 'react';
import { cn } from '../../utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'wide' | 'medium' | 'narrow' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'wide',
  className,
  ...props
}) => {
  const sizeStyles = {
    wide: 'max-w-7xl',
    medium: 'max-w-5xl',
    narrow: 'max-w-3xl',
    full: 'max-w-full'
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
