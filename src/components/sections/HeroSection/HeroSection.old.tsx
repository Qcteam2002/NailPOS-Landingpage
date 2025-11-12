import { motion } from 'framer-motion';
import { ArrowRight, Heart, Check, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/common/Container';

export const HeroSection = () => {
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
        marginTop: '68px', // Tránh overlap với header
        padding: '64px 0px',
        width: '100%',
        //maxWidth: '1400px',
        height: '668px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(0deg,rgba(78, 70, 229, 0.24), rgba(255, 255, 255, 0.2)), url(/images/hero-woman.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '0px',
        isolation: 'isolate',
      }}
    >
      <Container className="relative z-10 h-full flex items-center">
        <div className="w-full">
          {/* Left Side - Text Content */}
          <motion.div
            className="relative z-10 w-full lg:w-[568px] flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center rounded-lg bg-white border border-dashed border-primary mb-4 w-full sm:w-[318px]"
              style={{
                height: '36px',
                padding: '8px 16px',
                gap: '8px',
                flex: 'none',
                flexGrow: 0,
              }}
            >
              <Heart 
                size={16} 
                className="flex-shrink-0"
                style={{ color: '#F9A8D4' }}
                fill="#F9A8D4"
              />
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
                {t('hero.label')}
              </span>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              variants={itemVariants}
              className="mb-3"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-4 md:mb-6 w-full lg:w-[568px]"
              style={{ 
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: 'clamp(36px, 8vw, 72px)',
                lineHeight: 'clamp(44px, 9vw, 80px)',
                letterSpacing: '-0.75px',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              <span className="block">
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
                </span>
              </span>
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

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mb-6 md:mb-8 w-full lg:w-[568px]"
              style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 'clamp(16px, 4vw, 20px)',
                lineHeight: 'clamp(24px, 5vw, 36px)',
                color: '#475569',
              }}
            >
              {t('hero.description')}
            </motion.p>

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
                <span>{t('hero.ctaSecondary')}</span>
              </motion.button>
            </motion.div>

            {/* Benefits List */}
            <motion.ul
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {[1, 2, 3, 4].map((num) => (
                <motion.li
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-success)] flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-text-secondary">
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