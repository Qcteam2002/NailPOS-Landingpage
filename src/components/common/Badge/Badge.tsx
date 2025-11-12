import { LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
  variants?: Variants;
}

/**
 * Badge Component
 * 
 * Badge với icon và text, dùng cho Hero sections
 * 
 * @example
 * <Badge 
 *   text="Built by a Salon Owner's Husband"
 *   icon={Heart}
 *   iconColor="#F9A8D4"
 * />
 */
export const Badge = ({
  text,
  icon: Icon,
  iconColor = '#F9A8D4',
  className = '',
  variants,
}: BadgeProps) => {
  const baseClasses = `
    flex items-center rounded-lg bg-white border border-dashed border-primary
    w-full sm:w-[318px]
    ${className}
  `.trim();

  const baseStyle: React.CSSProperties = {
    height: '36px',
    padding: '8px 16px',
    gap: '8px',
    flex: 'none',
    flexGrow: 0,
  };

  const content = (
    <>
      {Icon && (
        <Icon 
          size={16} 
          className="flex-shrink-0"
          style={{ 
            color: iconColor,
            fill: iconColor,
          }}
        />
      )}
      <span 
        className="whitespace-nowrap overflow-hidden text-ellipsis"
        style={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          letterSpacing: '0.15px',
          color: '#1F2937',
          flex: 'none',
          flexGrow: 0,
        }}
      >
        {text}
      </span>
    </>
  );

  if (variants) {
    return (
      <motion.div
        className={baseClasses}
        style={baseStyle}
        variants={variants}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} style={baseStyle}>
      {content}
    </div>
  );
};

