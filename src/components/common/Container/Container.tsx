// components/common/Container/Container.tsx
import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'nav' | 'header' | 'footer';
}

/**
 * Container component với max-width và padding nhất quán
 * Đảm bảo tất cả sections có cùng alignment
 * 
 * Standard config:
 * - max-width: 1168px
 * - padding: 24px (px-6) mobile, 48px (px-12) desktop
 * 
 * @example
 * // Basic usage
 * <Container>
 *   <div>Content</div>
 * </Container>
 * 
 * @example
 * // With custom element and className
 * <Container as="section" className="py-16">
 *   <h2>Section Title</h2>
 * </Container>
 * 
 * @example
 * // For navigation (Header)
 * <Container as="nav" className="h-[68px] flex items-center">
 *   <div>Navigation content</div>
 * </Container>
 */
export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const baseClasses = 'w-full max-w-[1168px] mx-auto px-6 md:px-12';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};
