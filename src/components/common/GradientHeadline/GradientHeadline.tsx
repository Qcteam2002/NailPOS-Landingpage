import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';

export interface GradientHeadlineProps {
  text: string;
  gradientWords?: string[];
  solidColor?: string;
  size?: 'large' | 'medium' | 'small';
  className?: string;
  variants?: Variants;
  align?: 'left' | 'center' | 'right';
}

/**
 * GradientHeadline Component
 * 
 * Hiển thị headline với một số từ có gradient (pink to purple)
 * Dùng chung cho Hero sections và Forms
 * 
 * @example
 * <GradientHeadline 
 *   text="Love Your Business Again"
 *   gradientWords={["Love", "Again"]}
 *   solidColor="#374151"
 *   size="large"
 * />
 */
export const GradientHeadline = ({
  text,
  gradientWords = [],
  solidColor = '#374151',
  size = 'large',
  className = '',
  variants,
  align = 'left',
}: GradientHeadlineProps) => {
  const words = text.split(' ');
  
  const sizeClasses = {
    large: 'text-clamp(36px, 8vw, 72px) leading-clamp(44px, 9vw, 80px)',
    medium: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
    small: 'text-xl md:text-2xl leading-tight',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const Component = variants ? motion.h1 : 'h1';

  const baseClasses = `
    font-bold
    ${sizeClasses[size]}
    ${alignClasses[align]}
    ${className}
  `.trim();

  const baseStyle: React.CSSProperties = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 800,
    letterSpacing: size === 'large' ? '-0.75px' : '-0.5px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  const content = (
    <>
      {words.map((word, index) => {
        const shouldGradient = gradientWords.some(
          gw => word.includes(gw) || gw.includes(word)
        );
        
        return (
          <span key={index}>
            {shouldGradient ? (
              <span
                style={{
                  background: 'linear-gradient(90deg, #FA6985 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {word}
              </span>
            ) : (
              <span style={{ color: solidColor }}>{word}</span>
            )}
            {index < words.length - 1 && ' '}
          </span>
        );
      })}
    </>
  );

  if (variants) {
    return (
      <Component
        className={baseClasses}
        style={baseStyle}
        variants={variants}
      >
        {content}
      </Component>
    );
  }

  return (
    <Component className={baseClasses} style={baseStyle}>
      {content}
    </Component>
  );
};

