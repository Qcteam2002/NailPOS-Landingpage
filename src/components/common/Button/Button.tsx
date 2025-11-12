// components/common/Button/Button.tsx
import React from 'react';
import { ButtonProps } from '@/types';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  size = 'sm',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  className = '',
}) => {
  const baseClass = 'button';
  const variantClass = `button-${variant}`;
  const sizeClass = `button-${size}`;
  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className="button-label">{children}</span>
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

