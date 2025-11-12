import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap, DollarSign, Lock } from 'lucide-react';
import { useRef } from 'react';

export const CTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const benefits = [
    { icon: Zap, text: 'Setup in 24 hours' },
    { icon: DollarSign, text: '30-day money-back guarantee' },
    { icon: Lock, text: 'No long-term contracts' },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-bg-secondary to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-[1168px] mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 mb-6">
              <span className="text-2xl">💗</span>
              <span className="text-sm md:text-secondary text-text-secondary font-medium">
                Start Your Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-h1 font-bold text-text-primary mb-6">
              Ready to Transform Your Salon?
            </h2>
            <p className="text-body md:text-lead text-text-secondary max-w-3xl mx-auto">
              Join 12,000+ salon owners who increased their revenue by 47% on average. 
              Start your transformation today with a free demo.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 h-[52px] rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(250,105,133,0.4)] transition-shadow"
            >
              <span>{t('buttons.getStarted')}</span>
              <ArrowRight 
                size={16} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 h-[52px] rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              <span>{t('buttons.learnMore')}</span>
            </motion.button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-sm md:text-body text-text-secondary"
              >
                <benefit.icon size={18} className="text-accent" />
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
