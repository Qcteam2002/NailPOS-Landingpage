# 📖 Hướng Dẫn Hero Section - Cấu Trúc Mới Nhất

## 🎯 Cấu Trúc Hiện Tại (Hybrid Approach)

```
src/components/
├── common/                          # ✅ SHARED (cross-section)
│   ├── GradientHeadline/           # Dùng cho Hero + Forms
│   ├── Badge/                      # Dùng cho Hero
│   └── Description/                # Dùng cho Hero
│
└── sections/HeroSection/
    ├── HeroSectionHome.tsx         # Home page hero
    ├── HeroSectionSolutions.tsx    # Solutions page hero
    └── index.ts                     # Exports
```

---

## 🚀 Cách Tạo Hero Section Mới

### **Bước 1: Thêm Translations**

Thêm vào `src/i18n/locales/en/common.json` và `vi/common.json`:

```json
{
  "newHero": {
    "badge": "Your Badge Text",
    "headline": "Your Headline Text",
    "description": "Your description text",
    "ctaPrimary": "Primary Button",
    "ctaSecondary": "Secondary Button"
  }
}
```

### **Bước 2: Tạo Component Mới**

Tạo file `HeroSectionNewPage.tsx`:

```tsx
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/common/Container';
import { GradientHeadline } from '@/components/common/GradientHeadline';
import { Badge } from '@/components/common/Badge';
import { Description } from '@/components/common/Description';

export const HeroSectionNewPage = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        marginTop: '68px',
        padding: '64px 0px',
        height: '668px',
        background: 'linear-gradient(...)', // Hoặc backgroundImage
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
                text={t('newHero.badge')}
                icon={Heart}
                iconColor="#F9A8D4"
              />
            </motion.div>

            {/* Decorative line */}
            <motion.div variants={itemVariants} className="mb-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
            </motion.div>

            {/* Headline - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <GradientHeadline
                text={t('newHero.headline')}
                gradientWords={['Word1', 'Word2']} // Từ nào có gradient
                solidColor="#374151"
                size="large"
                variants={itemVariants}
              />
            </motion.div>

            {/* Description - Dùng shared component */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <Description
                text={t('newHero.description')}
                variants={itemVariants}
              />
            </motion.div>

            {/* CTA Buttons - Code riêng */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center rounded-full w-full sm:w-[224px]"
                style={{
                  height: '52px',
                  padding: '16px 32px',
                  background: '#4F46E5',
                  borderRadius: '9999px',
                  color: '#FFFFFF',
                }}
              >
                <span>{t('newHero.ctaPrimary')}</span>
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
```

### **Bước 3: Export Component**

Thêm vào `index.ts`:

```tsx
export { HeroSectionNewPage } from './HeroSectionNewPage';
```

### **Bước 4: Sử Dụng**

```tsx
import { HeroSectionNewPage } from '@/components/sections/HeroSection';
<HeroSectionNewPage />
```

---

## 📚 Shared Components

### **GradientHeadline**
```tsx
<GradientHeadline
  text="Your headline text"
  gradientWords={['Word1', 'Word2']}  // Từ nào có gradient
  solidColor="#374151"                // Màu cho các từ khác
  size="large"                        // large | medium | small
  align="left"                        // left | center | right
/>
```

### **Badge**
```tsx
<Badge
  text="Your badge text"
  icon={Heart}                        // Optional
  iconColor="#F9A8D4"                 // Optional
/>
```

### **Description**
```tsx
<Description
  text="Your description text"
  maxWidth="568px"                    // Optional
/>
```

---

## ✅ Checklist

- [ ] Thêm translations (en + vi)
- [ ] Tạo component mới
- [ ] Import shared components (GradientHeadline, Badge, Description)
- [ ] Export trong index.ts
- [ ] Sử dụng trong page
- [ ] Test responsive

---

## 💡 Tips

1. **Luôn dùng shared components** cho Badge, Headline, Description
2. **Code riêng** cho unique parts (stats, icons, custom layouts)
3. **Giữ animations** với Framer Motion variants
4. **Responsive** với Tailwind breakpoints

