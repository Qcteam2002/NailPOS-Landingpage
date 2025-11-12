import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/common/Container';
import { GradientHeadline } from '@/components/common/GradientHeadline';
import { Badge } from '@/components/common/Badge';
import { Description } from '@/components/common/Description';

/**
 * HeroSection cho Solutions Page
 * Sử dụng shared components (GradientHeadline, Badge, Description)
 */
export const HeroSectionSolutions = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section 
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        marginTop: '68px',
        padding: '64px 0px',
        width: '100%',
        height: '668px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px',
        isolation: 'isolate',
      }}
    >
      <Container className="relative z-10 h-full flex items-center">
        <div className="w-full">
          <motion.div
            className="relative z-10 w-full lg:w-[568px] mx-auto flex flex-col items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-4">
              <Badge
                text={t('solutionsHero.badge')}
                icon={Calendar}
                iconColor="#F9A8D4"
              />
            </motion.div>

            {/* Decorative line */}
            <motion.div
              variants={itemVariants}
              className="mb-3"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
            </motion.div>

            {/* Headline - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <GradientHeadline
                text={t('solutionsHero.headline')}
                gradientWords={['Appointment']}
                solidColor="#E5E7EB"
                size="large"
                align="center"
                variants={itemVariants}
              />
            </motion.div>

            {/* Description - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <Description
                text={t('solutionsHero.description')}
                variants={itemVariants}
                className="text-center"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow w-full sm:w-[224px]"
                style={{
                  height: '52px',
                  padding: '16px 32px',
                  gap: '8px',
                  background: '#4F46E5',
                  borderRadius: '9999px',
                  boxSizing: 'border-box',
                }}
              >
                <span 
                  className="whitespace-nowrap"
                  style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: '#FFFFFF',
                  }}
                >
                  {t('solutionsHero.ctaPrimary')}
                </span>
                <ArrowRight 
                  size={16} 
                  className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: '#FFFFFF' }}
                />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors whitespace-nowrap w-full sm:w-[139px]"
                style={{
                  height: '52px',
                  padding: '16px 32px',
                  border: '2px solid #4F46E5',
                  borderRadius: '9999px',
                  background: '#FFFFFF',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#4F46E5',
                }}
              >
                <span>{t('solutionsHero.ctaSecondary')}</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

