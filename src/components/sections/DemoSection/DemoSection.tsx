import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

export const DemoSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  // 5 demo screenshots - placeholder paths, sẽ thay bằng images thật
  const demos = [
    { id: 1, image: '/images/demo-1.png', alt: 'Demo 1' },
    { id: 2, image: '/images/demo-2.png', alt: 'Demo 2' },
    { id: 3, image: '/images/demo-3.png', alt: 'Demo 3' },
    { id: 4, image: '/images/demo-4.png', alt: 'Demo 4' },
    { id: 5, image: '/images/demo-5.png', alt: 'Demo 5' },
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % demos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + demos.length) % demos.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate transform offset to center the active slide
  const calculateTransform = (activeIndex: number) => {
    const slideWidth = 716;
    const activeSlideWidth = 800;
    const gap = 24;
    
    // Calculate the position of the center of the active slide
    let offset = 0;
    for (let i = 0; i < activeIndex; i++) {
      // Previous slides are 716px wide
      offset += slideWidth + gap;
    }
    // Add half of the active slide width to get its center
    offset += activeSlideWidth / 2;
    
    // Center the active slide in the viewport (50% of container width)
    return `calc(50% - ${offset}px)`;
  };

  return (
    <section className="py-16 md:py-14">
      <div ref={ref}>
        <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center relative"
          style={{
            padding: '64px 48px',
            gap: '44px',
            isolation: 'isolate',
            width: '100%',
            maxWidth: '1168px',
            minHeight: '906px',
            background: '#4F46E5',
            borderRadius: '32px',
            flex: 'none',
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
            style={{
              padding: '0px',
              gap: '24px',
              width: '568px',
              height: '268px',
              flex: 'none',
              flexGrow: 0,
              zIndex: 0,
            }}
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-row items-center"
              style={{
                padding: '8px 16px',
                gap: '8px',
                width: '377px',
                height: '36px',
                background: '#FFFFFF',
                borderRadius: '8px',
                flex: 'none',
                flexGrow: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '0px',
                  flex: 'none',
                  flexGrow: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart
                  size={16}
                  style={{
                    color: '#F9A8D4',
                    fill: '#F9A8D4',
                  }}
                />
              </div>
              {/* Label */}
              <span
                style={{
                  width: '321px',
                  height: '20px',
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
                {t('demo.label')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-center"
              style={{
                width: '568px',
                height: '112px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
                color: '#FFFFFF',
                flex: 'none',
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {t('demo.title')}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-center"
              style={{
                width: '568px',
                height: '72px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '36px',
                textAlign: 'center',
                color: '#FFFFFF',
                flex: 'none',
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {t('demo.description')}
            </motion.p>
          </motion.div>

          {/* Carousel Container */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              height: '420px',
              flex: 'none',
              flexGrow: 0,
              zIndex: 1,
            }}
          >
            {/* Carousel List */}
            <motion.div
              className="flex flex-row items-center h-full"
              style={{
                padding: '0px',
                gap: '24px',
                height: '420px',
                width: '2280px', // Total width: 716 + 24 + 800 + 24 + 716 + 24 + 716 + 24 + 716 = 2280px
                transform: `translateX(${calculateTransform(activeIndex)})`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {demos.map((demo, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <motion.div
                    key={demo.id}
                    className="flex-shrink-0"
                    style={{
                      width: isActive ? '800px' : '716px',
                      height: isActive ? '420px' : '376px',
                      borderRadius: '32px',
                      background: '#FFFFFF',
                      flex: 'none',
                      flexGrow: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={demo.image}
                      alt={demo.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback nếu image không tồn tại
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.background = '#E5E7EB';
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `
                          <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #9CA3AF; font-size: 18px;">
                            Demo ${index + 1}
                          </div>
                        `;
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Left Gradient Overlay */}
            <div
              className="absolute left-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: '160px',
                background: 'linear-gradient(270deg, rgba(79, 70, 229, 0) 0%, #4F46E5 100%)',
                flex: 'none',
                zIndex: 3,
              }}
            />

            {/* Right Gradient Overlay */}
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: '160px',
                background: 'linear-gradient(90deg, rgba(79, 70, 229, 0) 0%, #4F46E5 100%)',
                flex: 'none',
                zIndex: 3,
              }}
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-start"
            style={{
              padding: '0px',
              gap: '16px',
              width: '100%',
              maxWidth: '564px',
              height: '2px',
              flex: 'none',
              flexGrow: 0,
              zIndex: 2,
            }}
          >
            {demos.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0"
                style={{
                  width: '100px',
                  height: '2px',
                  background: activeIndex === index ? '#FFFFFF' : '#374151',
                  borderRadius: '4px',
                  flex: 'none',
                  flexGrow: 0,
                  cursor: 'pointer',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
        </Container>
      </div>
    </section>
  );
};
