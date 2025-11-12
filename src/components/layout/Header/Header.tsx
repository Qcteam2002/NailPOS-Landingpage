import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/common/Container';

export const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-header"
    >
      <Container 
        as="nav" 
        className="h-[68px] flex items-center justify-between"
        role="navigation" 
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" aria-label="Easy Nail POS Home" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="Easy Nail POS Logo"
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {['solutions', 'whoItsFor', 'pricing', 'about', 'contact'].map((item) => (
            <li key={item}>
              <motion.a
                href={`#${item}`}
                whileHover={{ scale: 1.05 }}
                className="text-body text-text-secondary hover:text-primary font-medium transition-colors"
              >
                {t(`navigation.${item}`)}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons - 282px × 44px, gap 12px */}
        <div className="hidden md:flex items-center gap-3">
          {/* Outline Button - Auto width × 44px */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              min-w-[132px] h-11
              px-6
              border-[2px] border-solid border-[#4F46E5]
              rounded-full
              font-bold text-base leading-5 whitespace-nowrap
              text-[#4F46E5]
              hover:bg-[#4F46E5]/5
              transition-colors
            "
          >
            {t('buttons.freeDemo')}
          </motion.button>
          
          {/* Filled Button - Auto width × 44px */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center justify-center
              min-w-[138px] h-11
              px-6
              bg-[#4F46E5]
              rounded-full
              font-bold text-base leading-5 whitespace-nowrap
              text-white
              hover:bg-[#4338CA]
              transition-colors
              shadow-sm
            "
          >
            {t('buttons.getStarted')}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-primary transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {['solutions', 'whoItsFor', 'pricing', 'about', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-body text-text-secondary hover:text-primary font-medium transition-colors"
                >
                  {t(`navigation.${item}`)}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <button className="
                w-full h-11
                px-6
                bg-white
                border-[2.5px] border-solid border-[#4F46E5]
                rounded-full
                font-bold text-base
                text-[#4F46E5]
                hover:bg-[#4F46E5]/5
                transition-colors
              ">
                {t('buttons.freeDemo')}
              </button>
              <button className="
                w-full h-11
                px-6
                bg-[#4F46E5]
                rounded-full
                font-bold text-base
                text-white
                hover:bg-[#4338CA]
                transition-colors
                shadow-sm
              ">
                {t('buttons.getStarted')}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};
