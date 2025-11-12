import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="max-w-[1168px] mx-auto px-6 md:px-12 py-16">
        {/* Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 mb-16 border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h4 className="text-h2 font-bold mb-4">
              {t('footer.subscription.title')}
            </h4>
            <p className="text-body text-gray-300">
              {t('footer.subscription.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 h-[44px] rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email address"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 h-[44px] rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
            >
              {t('buttons.subscribe')}
            </motion.button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <span className="text-2xl font-semibold">
                <span className="text-white">easy </span>
                <span className="text-primary font-bold">nails</span>
                <span className="text-white font-bold">POS</span>
              </span>
            </div>

            <p className="text-body text-gray-400 mb-6">
              The complete point-of-sale solution designed specifically for nail salons.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-accent" />
                <span>sales@nailpropos.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-accent" />
                <span>123 Tech Street, San Francisco, CA</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#FA6985' }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-h4 font-semibold mb-4">{t('footer.product')}</h5>
              <ul className="space-y-3">
                {['Solutions', 'Pricing', 'Free Demo', "Who It's For"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#FA6985' }}
                      className="text-body text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-h4 font-semibold mb-4">{t('footer.resources')}</h5>
              <ul className="space-y-3">
                {['Success Stories', 'Video Tutorials'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#FA6985' }}
                      className="text-body text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-h4 font-semibold mb-4">{t('footer.company')}</h5>
              <ul className="space-y-3">
                {['About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#FA6985' }}
                      className="text-body text-gray-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            {['Legal', 'Terms of Service', 'Privacy Policy'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: '#FA6985' }}
                className="hover:text-accent transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
