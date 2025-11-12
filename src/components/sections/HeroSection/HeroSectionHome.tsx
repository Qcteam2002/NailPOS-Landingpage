import { motion } from 'framer-motion';
import { ArrowRight, Heart, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/common/Badge';
import { Description } from '@/components/common/Description';

/**
 * HeroSection cho Home Page
 * Sử dụng shared components (Badge, Description)
 * Headline có gradient toàn bộ text
 */
export const HeroSectionHome = () => {
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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
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
        background: 'linear-gradient(0deg,rgba(78, 70, 229, 0.18), rgba(255, 255, 255, 0.2)), url(/images/hero-woman.jpg)',
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
            className="relative z-10 w-full lg:w-[568px] flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-4">
              <Badge
                text={t('hero.label')}
                icon={Heart}
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

            {/* Headline - "Love" và "Again" có gradient, "Your" và "Business" có màu solid */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 md:mb-6 w-full lg:w-[568px]"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 'clamp(36px, 7vw, 72px)',
                lineHeight: 'clamp(44px, 8vw, 80px)',
                letterSpacing: '-0.75px',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(90deg, #FA6985 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('hero.headlineLove').split(' ')[0]}
              </span>{' '}
              <span style={{ color: '#374151' }}>
                {t('hero.headlineLove').split(' ')[1]}
              </span>{' '}
              <span style={{ color: '#374151' }}>
                {t('hero.headlineBusiness')}
              </span>{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FA6985 0%, #818CF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('hero.headlineAgain')}
              </span>
            </motion.h1>

            {/* Description - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <Description
                text={t('hero.description')}
                variants={itemVariants}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-3 mb-6 md:mb-8 w-full sm:w-auto"
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
                  {t('hero.ctaPrimary')}
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
                  //background: '#FFFFFF',
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
                <span>{t('hero.ctaSecondary')}</span>
              </motion.button>
            </motion.div>

            {/* Benefits List */}
            <motion.ul
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center w-full lg:w-[568px]"
              style={{
                padding: '0px',
                gap: '8px 16px', // 8px vertical, 16px horizontal
                minHeight: '48px',
                alignContent: 'flex-start',
                flex: 'none',
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {[1, 2, 3, 4].map((num) => (
                <motion.li
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                  style={{
                    padding: '0px',
                    gap: '8px',
                    flex: 'none',
                    flexGrow: 0,
                  }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center">
                    <svg 
                      width="19" 
                      height="19" 
                      viewBox="0 0 19 19" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path 
                        d="M7.67015 0.110596C9.72231 -0.212659 11.8238 0.177893 13.6233 1.21606C13.9819 1.42311 14.1046 1.88177 13.8977 2.24048C13.6906 2.59914 13.232 2.72187 12.8733 2.51489C11.371 1.64828 9.61674 1.32313 7.90355 1.59302C6.1902 1.86301 4.62032 2.71152 3.45726 3.99829C2.29423 5.28506 1.60795 6.93249 1.51195 8.66431C1.41606 10.3959 1.9164 12.1086 2.92992 13.5159C3.94368 14.9232 5.41024 15.941 7.08324 16.3987C8.75612 16.8561 10.5355 16.7259 12.1243 16.0305C13.7132 15.3349 15.0159 14.1151 15.8147 12.5754C16.6134 11.0358 16.8602 9.26911 16.5139 7.56958C16.4314 7.16388 16.6942 6.7676 17.0998 6.68481C17.5054 6.60244 17.9007 6.86439 17.9836 7.26978C18.3985 9.30559 18.1035 11.4226 17.1467 13.2668C16.1899 15.1111 14.6291 16.5714 12.7258 17.4045C10.8227 18.2375 8.69157 18.3929 6.68773 17.845C4.6838 17.2968 2.92742 16.0786 1.71312 14.3928C0.498942 12.7071 -0.100977 10.6556 0.0139008 8.5813C0.12889 6.50689 0.951835 4.53374 2.34496 2.99243C3.73806 1.45125 5.61798 0.433967 7.67015 0.110596ZM16.885 1.88989C17.1778 1.59716 17.6527 1.5972 17.9455 1.88989C18.2381 2.18277 18.2382 2.65763 17.9455 2.95044L9.61253 11.2834C9.31973 11.5762 8.8449 11.5761 8.55199 11.2834L6.05199 8.78345C5.75926 8.49054 5.75915 8.01574 6.05199 7.7229C6.34485 7.43033 6.81972 7.43026 7.11253 7.7229L9.08226 9.69263L16.885 1.88989Z" 
                        fill="#10B981"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-text-secondary whitespace-nowrap">
                    {t(`hero.bullet${num}`)}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </Container>

      {/* Overlay Cards - Absolute positioned trên background */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Owner Happiness Card */}
        <motion.div
          variants={statCardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="absolute flex flex-row items-center rounded-xl pointer-events-auto"
          style={{
            left: '870px',
            top: '345px',
            width: '207px',
            height: '78px',
            padding: '12px 16px',
            background: 'rgba(255, 255, 255, 0.72)',
            boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.04)',
            zIndex: 1,
            flex: 'none',
            flexGrow: 0,
          }}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Smile size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-text-primary">+86%</div>
              <div className="text-xs text-text-secondary">{t('hero.statOwnerHappiness')}</div>
            </div>
          </div>
        </motion.div>

        {/* Customer Loyalty Card */}
        <motion.div
          variants={statCardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="absolute flex items-center rounded-xl pointer-events-auto"
          style={{
            right: '220px',
            bottom: '15%',
            width: '207px',
            height: '78px',
            padding: '12px 16px',
            background: 'rgba(255, 255, 255, 0.72)',
            boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.04)',
            zIndex: 1,
            flex: 'none',
            flexGrow: 0,
          }}
        >
          <div className="flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Heart size={20} className="text-accent fill-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-text-primary">+37%</div>
              <div className="text-xs text-text-secondary">{t('hero.statCustomerLoyalty')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

