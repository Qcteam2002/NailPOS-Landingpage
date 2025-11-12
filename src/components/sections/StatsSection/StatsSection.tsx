import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, TrendingUp, Clock, Star } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Hook để animate số từ 0 đến target number
 */
const useCountUp = (target: number, isInView: boolean, duration: number = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, target, duration]);

  return count;
};

/**
 * Component để hiển thị số với animation
 */
const AnimatedNumber = ({ 
  value, 
  isInView,
  delay = 0
}: { 
  value: string; 
  isInView: boolean;
  delay?: number;
}) => {
  // Parse số từ string (xử lý các format: "12,000+", "47%", "15hrs", "4.9/5")
  const parseNumber = (str: string): { number: number; suffix: string; prefix: string } => {
    // Xử lý "12,000+"
    if (str.includes('+')) {
      const num = parseFloat(str.replace(/,/g, '').replace('+', ''));
      return { number: num, suffix: '+', prefix: '' };
    }
    // Xử lý "47%"
    if (str.includes('%')) {
      const num = parseFloat(str.replace('%', ''));
      return { number: num, suffix: '%', prefix: '' };
    }
    // Xử lý "15hrs"
    if (str.includes('hrs')) {
      const num = parseFloat(str.replace('hrs', ''));
      return { number: num, suffix: 'hrs', prefix: '' };
    }
    // Xử lý "4.9/5"
    if (str.includes('/')) {
      const parts = str.split('/');
      const num = parseFloat(parts[0]);
      return { number: num, suffix: `/${parts[1]}`, prefix: '' };
    }
    // Default
    const num = parseFloat(str.replace(/,/g, ''));
    return { number: num, suffix: '', prefix: '' };
  };

  const { number, suffix, prefix } = parseNumber(value);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Delay animation để sync với stagger
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const count = useCountUp(number, shouldAnimate, 2);

  // Format số với comma nếu cần
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toLocaleString('en-US');
    }
    if (num % 1 !== 0) {
      return num.toFixed(1);
    }
    return num.toString();
  };

  return (
    <span>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { 
      number: '12,000+', 
      label: t('stats.activeSalons'),
      icon: Users,
    },
    { 
      number: '47%', 
      label: t('stats.avgRevenueGrowth'),
      icon: TrendingUp,
    },
    { 
      number: '15hrs', 
      label: t('stats.timeSaved'),
      icon: Clock,
    },
    { 
      number: '4.9/5', 
      label: t('stats.customerRating'),
      icon: Star,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 md:py-14 bg-gradient-to-b from-white to-bg-secondary">
      <div ref={ref}>
        <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center w-full gap-6]"
          style={{
            minHeight: '240px',
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center flex-shrink-0 w-full md:w-[280px]"
                style={{
                  minHeight: '128px',
                  padding: '0px',
                  gap: '12px',
                  borderRadius: '0px',
                  flex: 'none',
                  flexGrow: 0,
                }}
              >
                {/* Icon */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(99, 102, 241, 0.1)', // Light blue background
                  }}
                >
                  <Icon 
                    size={24} 
                    className="text-primary"
                    strokeWidth={2}
                  />
                </div>

                {/* Number */}
                <div 
                  className="text-center w-full md:w-[280px]"
                  style={{
                    minHeight: '44px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 6vw, 36px)',
                    lineHeight: 'clamp(36px, 7vw, 44px)',
                    textAlign: 'center',
                    letterSpacing: '0.25px',
                    color: '#374151',
                    flex: 'none',
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  <AnimatedNumber 
                    value={stat.number} 
                    isInView={isInView}
                    delay={index * 0.2}
                  />
                </div>

                {/* Label */}
                <div 
                  className="text-center w-full md:w-[280px]"
                  style={{
                    minHeight: '20px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    lineHeight: 'clamp(18px, 4vw, 20px)',
                    textAlign: 'center',
                    letterSpacing: '0.15px',
                    color: '#374151',
                    flex: 'none',
                    alignSelf: 'stretch',
                    flexGrow: 0,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        </Container>
      </div>
    </section>
  );
};
