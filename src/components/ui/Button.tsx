'use client';

import { colors } from '@/styles/typography';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  textColor,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  suppressHydrationWarning = true,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'rounded-md font-sans transition-all duration-300 flex items-center justify-center cursor-pointer';

  // Size variations
  const sizeStyles = {
    small: 'py-2 px-4 text-sm',
    medium: 'py-4 px-8 text-base',
    large: 'py-5 px-10 text-lg',
  };

  // Variant styles with enhanced hover effects
  const variantStyles = {
    primary: `${backgroundColor || colors.bgDark} ${textColor || 'text-white'} hover:bg-opacity-70 hover:shadow-lg hover:scale-105 hover:translate-y-[-2px] active:translate-y-0.5 active:scale-100`,
    secondary: `${backgroundColor || colors.bgGreen} ${textColor || colors.dark} hover:bg-opacity-70 hover:shadow-lg hover:scale-105 hover:translate-y-[-2px] active:translate-y-0.5 active:scale-100`,
    outlined: `bg-transparent border-2 ${backgroundColor ? `border-[${backgroundColor.replace('bg-', '')}]` : 'border-[#191A23]'} ${textColor || colors.dark} hover:bg-[#191A23] hover:bg-opacity-10 hover:shadow-lg hover:scale-105 hover:translate-y-[-2px] active:translate-y-0.5 active:scale-100`,
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`}
      type={props.type || 'button'}
      tabIndex={props.tabIndex || 0}
      aria-label={props['aria-label'] || (typeof children === 'string' ? children : undefined)}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
