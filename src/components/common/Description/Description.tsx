import { motion, Variants } from 'framer-motion';

export interface DescriptionProps {
  text: string;
  maxWidth?: string;
  className?: string;
  variants?: Variants;
}

/**
 * Description Component
 * 
 * Paragraph text description, dùng cho Hero sections
 * 
 * @example
 * <Description 
 *   text="You opened your salon to create beauty..."
 *   maxWidth="568px"
 * />
 */
export const Description = ({
  text,
  maxWidth = '568px',
  className = '',
  variants,
}: DescriptionProps) => {
  const baseClasses = `
    w-full
    ${className}
  `.trim();

  const baseStyle: React.CSSProperties = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 'clamp(16px, 4vw, 20px)',
    lineHeight: 'clamp(24px, 5vw, 36px)',
    color: '#475569',
    maxWidth: maxWidth,
  };

  if (variants) {
    return (
      <motion.p
        className={baseClasses}
        style={baseStyle}
        variants={variants}
      >
        {text}
      </motion.p>
    );
  }

  return (
    <p className={baseClasses} style={baseStyle}>
      {text}
    </p>
  );
};

