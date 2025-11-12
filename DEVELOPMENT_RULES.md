# QUY TẮC PHÁT TRIỂN LANDING PAGE

> 📖 **Xem [ARCHITECTURE.md](./ARCHITECTURE.md) để hiểu chi tiết về cấu trúc dự án, lý do chọn tech stack, và hướng dẫn maintain.**
> 📐 **Xem [docs/CODING_RULES.md](./docs/CODING_RULES.md) để biết rules khi code và cấu trúc source code mới nhất.**

---

## 🏗️ CẤU TRÚC HIỆN TẠI (2024)

### **Tech Stack:**
```
Frontend:    React 18 + TypeScript + Vite
Styling:     Tailwind CSS v3.4 + CSS Variables
Animation:   Framer Motion
Icons:       Lucide React
i18n:        react-i18next
```

### **Tại sao chọn cấu trúc này?**

✅ **Tailwind CSS** → Code gọn gàng hơn 60%, không cần CSS files riêng  
✅ **Framer Motion** → Animations mượt mà, dễ maintain  
✅ **CSS Variables** → Design system nhất quán, dễ thay đổi theme  
✅ **Vite** → Build nhanh nhất, HMR cực tốt  
✅ **TypeScript** → Type-safe, ít bug hơn  

**📚 Chi tiết:** Đọc [ARCHITECTURE.md](./ARCHITECTURE.md) - Section "Why This Architecture"

---

## 📋 MỤC LỤC
1. [Tổng quan](#tổng-quan)
2. [Cấu trúc dự án](#cấu-trúc-dự-án)
3. [Ngôn ngữ & Framework](#ngôn-ngữ--framework)
4. [Quy tắc Code Style](#quy-tắc-code-style)
5. [Mobile First Approach](#mobile-first-approach)
6. [Internationalization (i18n)](#internationalization-i18n)
7. [Styling & Design System](#styling--design-system)
8. [Tailwind CSS + Framer Motion Approach](#tailwind-css--framer-motion-approach)
9. [Performance](#performance)
10. [SEO & Accessibility](#seo--accessibility)
11. [Git Workflow](#git-workflow)

---

## 🎯 TỔNG QUAN

### Mục tiêu
- Landing page chuyên nghiệp, hiện đại
- Responsive design (Mobile First)
- Đa ngôn ngữ (i18n)
- Performance tối ưu
- SEO friendly
- Accessibility compliant

---

## 📁 CẤU TRÚC DỰ ÁN

> **📚 Xem [ARCHITECTURE.md](./ARCHITECTURE.md) - Section "Project Structure" để hiểu chi tiết về cấu trúc hiện tại và lý do.**

### **Cấu trúc hiện tại (Simplified):**

```
Nail-Pos-Landingpage/
├── public/                      # Static assets
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── common/             # ✅ Reusable components (Button, Container)
│   │   │   └── Button/
│   │   │       ├── Button.tsx       # ✅ No CSS file!
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/             # ✅ Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx       # ✅ Tailwind + Framer Motion
│   │   │   │   └── index.ts
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── sections/           # ✅ Page sections
│   │       ├── HeroSection/
│   │       │   ├── HeroSection.tsx  # ✅ Tailwind + Animations
│   │       │   └── index.ts
│   │       ├── StatsSection/
│   │       ├── DemoSection/
│   │       └── CTASection/
│   │
│   ├── pages/                  # Page components
│   │   └── HomePage.tsx
│   │
│   ├── i18n/                   # ✅ Internationalization
│   │   ├── locales/
│   │   │   ├── vi/common.json
│   │   │   └── en/common.json
│   │   ├── config.ts
│   │   └── index.ts
│   │
│   ├── styles/                 # ✅ Global styles ONLY
│   │   ├── variables.css       # ⭐ Design System (CSS Variables)
│   │   ├── reset.css
│   │   ├── base.css
│   │   └── utilities.css
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   │
│   ├── index.css               # ✅ Main CSS entry
│   ├── App.tsx
│   └── main.tsx
│
├── tailwind.config.js           # ✅ Tailwind configuration
├── postcss.config.js            # ✅ PostCSS configuration
├── vite.config.ts               # ✅ Vite configuration
├── tsconfig.json
├── package.json
├── DEVELOPMENT_RULES.md         # 📖 This file
├── ARCHITECTURE.md              # 📖 Architecture documentation
└── README.md
```

### **⚠️ Key Differences:**

| Traditional | Our Approach |
|------------|--------------|
| ❌ `Button.css` | ✅ No CSS file, use Tailwind classes |
| ❌ `HeroSection.css` | ✅ No CSS file, use Tailwind + Framer Motion |
| ❌ Separate icon files | ✅ Lucide React components |
| ❌ Custom animations CSS | ✅ Framer Motion declarative animations |

---

## 🛠 NGÔN NGỮ & FRAMEWORK

### Stack được đề xuất:

#### **Frontend Framework:**
- **React 18+** với TypeScript
- Hoặc **Vue 3** với TypeScript
- Hoặc **Next.js 14+** (nếu cần SSR)

#### **Build Tool:**
- **Vite** (recommended - nhanh nhất)
- Hoặc **Webpack 5**

#### **Styling:**
- **Tailwind CSS** (recommended) - Utility-first CSS
- Hoặc **CSS Modules** + **SASS/SCSS**
- Hoặc **Styled Components** (nếu dùng React)

#### **i18n Library:**
- **react-i18next** (nếu dùng React)
- Hoặc **vue-i18n** (nếu dùng Vue)
- Hoặc **next-i18next** (nếu dùng Next.js)

#### **State Management:**
- **Zustand** hoặc **Jotai** (lightweight)
- Hoặc **Context API** (nếu đơn giản)
- Hoặc **Redux Toolkit** (nếu phức tạp)

#### **Form Handling:**
- **React Hook Form** (nếu dùng React)
- Hoặc **VeeValidate** (nếu dùng Vue)

#### **Animation:**
- **Framer Motion** (React)
- Hoặc **GSAP**
- Hoặc **CSS Animations**

---

## 📝 QUY TẮC CODE STYLE

### 1. **Naming Conventions**

#### Files & Folders:
- **Components**: PascalCase - `Button.tsx`, `HeroSection.tsx`
- **Hooks**: camelCase với prefix `use` - `useMediaQuery.ts`
- **Utils**: camelCase - `formatDate.ts`, `validateEmail.ts`
- **Constants**: UPPER_SNAKE_CASE - `API_ENDPOINTS.ts`
- **Folders**: kebab-case - `hero-section/`, `contact-form/`

#### Variables & Functions:
- **Variables**: camelCase - `userName`, `isLoading`
- **Functions**: camelCase - `handleSubmit()`, `formatCurrency()`
- **Components**: PascalCase - `<Button />`, `<HeroSection />`
- **Constants**: UPPER_SNAKE_CASE - `MAX_LENGTH`, `API_BASE_URL`

#### CSS Classes:
- **BEM Methodology** (nếu không dùng Tailwind):
  ```css
  .button { }
  .button--primary { }
  .button__icon { }
  ```

### 2. **Component Structure**

```tsx
// Component template - KHÔNG có CSS file riêng
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GradientHeadline } from '@/components/common/GradientHeadline';

export interface ComponentNameProps {
  title: string;
  onClick?: () => void;
}

export const ComponentName = ({ title, onClick }: ComponentNameProps) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="flex items-center gap-4 p-6 bg-white rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GradientHeadline text={title} />
    </motion.div>
  );
};
```

**Rules:**
- ✅ **KHÔNG có CSS file riêng** - Dùng Tailwind classes
- ✅ Dùng shared components khi có thể
- ✅ Framer Motion cho animations
- ✅ Translations cho tất cả text

### 3. **TypeScript Rules**

- **Bắt buộc sử dụng TypeScript**
- Luôn define types/interfaces cho props
- Không dùng `any` - dùng `unknown` nếu cần
- Sử dụng type inference khi có thể
- Export types từ file `types/index.ts`

### 4. **Code Organization**

- Mỗi component trong folder riêng
- Component file: `ComponentName.tsx`
- **KHÔNG có CSS file** - Dùng Tailwind classes
- Export từ `index.ts`
- Types inline hoặc trong `types/index.ts` nếu shared

### 5. **Import Order**

```tsx
// 1. React/External libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// 2. Internal components
import { Button } from '@/components/common/Button';
import { Header } from '@/components/layout/Header';

// 3. Types (nếu cần)
import type { ButtonProps } from '@/types';
```

---

## 📱 MOBILE FIRST APPROACH

### 1. **Breakpoints Standard**

Sử dụng Tailwind breakpoints (đã config trong `tailwind.config.js`):

```tsx
// Mobile first - viết cho mobile trước
<div className="text-sm md:text-base lg:text-lg">
  {/* Mobile: text-sm, Tablet+: text-base, Desktop+: text-lg */}
</div>
```

**Tailwind Breakpoints:**
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+
- `2xl:` - 1536px+

### 2. **Responsive Design Rules**

- **Viết CSS cho mobile trước**, sau đó dùng media queries cho desktop
- Sử dụng `min-width` thay vì `max-width`
- Test trên thiết bị thật, không chỉ browser dev tools
- Touch targets tối thiểu 44x44px (iOS) hoặc 48x48px (Android)

### 3. **Mobile Optimization**

- Lazy load images
- Optimize images (WebP format, responsive images)
- Minimize JavaScript bundle size
- Code splitting cho routes
- Preload critical resources

### 4. **Media Query Pattern**

```css
/* Mobile First - Base styles cho mobile */
.component {
  padding: 1rem;
  font-size: 14px;
}

/* Tablet và lớn hơn */
@media (min-width: 768px) {
  .component {
    padding: 2rem;
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .component {
    padding: 3rem;
    font-size: 18px;
  }
}
```

### 5. **Touch Interactions**

- Hỗ trợ touch gestures
- Swipe actions nếu cần
- Disable hover effects trên mobile
- Sử dụng `touch-action` CSS property

---

## 🌍 INTERNATIONALIZATION (i18n)

### 1. **Cấu trúc i18n**

```
src/i18n/
├── locales/
│   ├── vi/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   └── forms.json
│   ├── en/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   └── forms.json
│   └── ja/
│       ├── common.json
│       ├── navigation.json
│       └── forms.json
├── config.ts
└── index.ts
```

### 2. **Translation File Structure**

```json
// locales/vi/common.json
{
  "welcome": "Chào mừng",
  "getStarted": "Bắt đầu",
  "learnMore": "Tìm hiểu thêm",
  "contact": {
    "title": "Liên hệ",
    "email": "Email",
    "phone": "Số điện thoại"
  }
}
```

### 3. **i18n Configuration**

```typescript
// i18n/config.ts
export const i18nConfig = {
  defaultLocale: 'vi',
  locales: ['vi', 'en', 'ja'],
  fallbackLocale: 'vi',
  // Detect browser language
  detectBrowserLanguage: true,
};
```

### 4. **Usage trong Components**

```tsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </div>
  );
};
```

### 5. **i18n Best Practices**

- Luôn dùng translation keys, không hardcode text
- Namespace translations theo feature
- Validate translations có đầy đủ keys
- RTL support nếu cần (Arabic, Hebrew)
- Format numbers, dates theo locale

---

## 🎨 STYLING & DESIGN SYSTEM

### 1. **CSS Variables Structure**

```css
/* styles/variables.css */
:root {
  /* ===== COLORS ===== */
  /* Primary Colors - Indigo */
  --color-primary: #6366F1;           /* Indigo 500 - Logo, POS text, primary elements */
  --color-primary-dark: #4F46E5;      /* Indigo 600 - Button borders, filled buttons */
  --color-primary-light: #818CF8;     /* Indigo 400 - Hover states */
  --color-primary-lighter: #A5B4FC;   /* Indigo 300 - Light backgrounds */
  
  /* Secondary/Accent Colors - Pink */
  --color-accent: #FA6985;            /* Pink - Brand mark accent, highlights */
  --color-accent-dark: #F43F5E;       /* Pink darker - Hover states */
  --color-accent-light: #FB9DB0;      /* Pink lighter - Light backgrounds */
  
  /* Text Colors */
  --color-text-primary: #1F2937;      /* Gray 800 - Logo text "easy nails", headings */
  --color-text-secondary: #374151;   /* Gray 700 - Navigation links, body text */
  --color-text-tertiary: #6B7280;    /* Gray 500 - Placeholder, muted text */
  --color-text-muted: #9CA3AF;       /* Gray 400 - Footer text, secondary content */
  --color-text-slate: #475569;       /* Slate 600 - Hero subtitle */
  --color-text-inverse: #FFFFFF;      /* White - Text on dark/colored backgrounds */
  
  /* Background Colors */
  --color-background: #FFFFFF;        /* White - Main background */
  --color-background-overlay: rgba(255, 255, 255, 0.72); /* Semi-transparent white - Header overlay */
  --color-background-gray: #F9FAFB;  /* Gray 50 - Light backgrounds */
  --color-background-slate: #F3F4F6; /* Gray 100 - Estimate card background */
  --color-background-blue: #EFF6FF;  /* Blue 50 - Demo section, testimonial section */
  --color-background-dark: #111827;  /* Gray 900 - Footer background */
  --color-background-indigo-light: #EEF2FF; /* Indigo 50 - Feature icon backgrounds */
  --color-background-pink-light: #FFF6F8;    /* Pink 50 - Feature icon backgrounds */
  --color-background-green-light: #ECFDF5;  /* Green 50 - Success states, badges */
  
  /* Border Colors */
  --color-border: #E5E7EB;           /* Gray 200 - Default borders */
  --color-border-primary: #4F46E5;    /* Primary border color */
  --color-border-dark: #D1D5DB;      /* Gray 300 - Card borders */
  --color-border-overlay: rgba(255, 255, 255, 0.12); /* Footer border */
  
  /* Success/Status Colors */
  --color-success: #10B981;          /* Green 500 - Success states, badges */
  --color-success-light: #00BC7D;    /* Green variant - Check icons */
  --color-success-bg: #ECFDF5;       /* Green 50 - Success backgrounds */
  
  /* Warning/Star Colors */
  --color-warning: #FACC15;          /* Yellow 400 - Star ratings */
  
  /* Icon Background Colors */
  --color-icon-bg-blue: #EFF6FF;     /* Blue 50 - Demo value icons */
  --color-icon-blue: #3B82F6;        /* Blue 500 - Demo icons */
  --color-icon-blue-border: #00A6F4; /* Blue variant - Icon borders */
  
  /* Gradient Colors */
  --gradient-primary: linear-gradient(90deg, #FA6985 0%, #818CF8 100%); /* Hero headline, testimonials */
  --gradient-primary-alt: linear-gradient(90deg, #FA6985 0%, #4F46E5 100%); /* About section title */
  --gradient-decor: linear-gradient(90deg, #FA6985 0%, #818CF8 100%); /* Hero decor line */
  --gradient-cta: linear-gradient(0deg, #FFF6F8 0%, #E0E7FF 100%); /* CTA section background */
  --gradient-fade-left: linear-gradient(270deg, rgba(79, 70, 229, 0) 0%, #4F46E5 100%); /* Demo carousel fade */
  --gradient-fade-right: linear-gradient(90deg, rgba(79, 70, 229, 0) 0%, #4F46E5 100%); /* Demo carousel fade */
  
  /* ===== TYPOGRAPHY ===== */
  /* Font Family */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-family-secondary: 'Inter', sans-serif;
  
  /* Font Sizes - Typography Scale */
  --font-size-xs: 12px;               /* Caption, image footnotes - line-height: 16px */
  --font-size-sm: 14px;               /* Secondary text, dense UI - line-height: 20px */
  --font-size-base: 16px;            /* Default body text, button labels - line-height: 24px */
  --font-size-lg: 18px;              /* Lead paragraph, section titles - line-height: 28px */
  --font-size-xl: 20px;              /* Lead paragraph, subheadings - line-height: 28px (h4) or 36px (xl) */
  --font-size-2xl: 24px;             /* Not commonly used */
  --font-size-3xl: 28px;             /* General section title - line-height: 36px */
  --font-size-4xl: 36px;             /* KPI or large stat, section heading (h2) - line-height: 44px */
  --font-size-5xl: 48px;             /* Page title (h1), section heading - line-height: 56px */
  --font-size-6xl: 72px;             /* Hero headline / hero banner - line-height: 80px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;         /* Default body text, lead paragraphs */
  --font-weight-medium: 500;         /* Large label, form field group */
  --font-weight-semibold: 600;       /* Button labels, page titles (h1), section headings (h2) */
  --font-weight-bold: 700;            /* Navigation links, strong emphasis, feature titles */
  --font-weight-extrabold: 800;
  
  /* Line Heights */
  --line-height-xs: 16px;            /* 12px text - 133% */
  --line-height-sm: 20px;             /* 14px text - 143% */
  --line-height-base: 24px;          /* 16px text - 150% */
  --line-height-lg: 28px;            /* 18px text - 156% */
  --line-height-xl: 36px;            /* 20px text - 180% */
  --line-height-2xl: 44px;           /* 36px text - 122% */
  --line-height-3xl: 56px;           /* 48px text - 117% */
  --line-height-4xl: 80px;           /* 72px text - 111% */
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.75px;   /* Hero headline */
  --letter-spacing-normal: 0px;
  --letter-spacing-wide: 0.15px;      /* Labels, captions, secondary text */
  --letter-spacing-wider: 0.25px;     /* KPI numerals */
  
  /* Text Transform */
  --text-transform-nav: capitalize;   /* Navigation links */
  --text-transform-button: capitalize; /* Button labels */
  
  /* Font Style */
  --font-style-normal: normal;
  --font-style-italic: italic;       /* Testimonials, quotes, italic text */
  
  /* ===== SPACING ===== */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;                 /* Gap between buttons */
  --spacing-lg: 16px;
  --spacing-xl: 24px;                 /* Button padding vertical, tab padding */
  --spacing-2xl: 32px;
  --spacing-3xl: 36px;                /* Header horizontal padding */
  --spacing-4xl: 48px;
  --spacing-5xl: 64px;
  --spacing-6xl: 150px;               /* Container gap (150.49px rounded) */
  
  /* Component Specific Spacing */
  --header-padding-x: 36px;           /* Header horizontal padding */
  --header-padding-y: 0px;            /* Header vertical padding */
  --header-height: 68px;               /* Header height */
  --section-padding-y: 64px;          /* Section vertical padding */
  --section-padding-x: 48px;          /* Section horizontal padding */
  --container-max-width: 1168px;      /* Container max width */
  --container-padding: 0px;           /* Container padding */
  
  /* Button Sizes */
  --button-sm-padding-x: 24px;       /* Small button horizontal padding */
  --button-sm-padding-y: 12px;       /* Small button vertical padding */
  --button-sm-height: 44px;          /* Small button height */
  --button-md-padding-x: 32px;        /* Medium button horizontal padding */
  --button-md-padding-y: 16px;       /* Medium button vertical padding */
  --button-md-height: 52px;          /* Medium button height */
  --button-gap: 8px;                 /* Gap between button icon and label */
  --button-icon-size: 16px;          /* Button icon size */
  
  /* Tab/Navigation */
  --tab-padding: 24px;                /* Navigation tab padding */
  
  /* Card/Feature Spacing */
  --card-padding: 24px;              /* Card padding */
  --card-gap: 16px;                  /* Card content gap */
  --feature-gap: 16px;               /* Feature grid gap */
  --feature-icon-size: 24px;         /* Feature icon size */
  --feature-icon-bg-size: 40px;      /* Feature icon background size */
  
  /* Input/Form Spacing */
  --input-padding-x: 20px;           /* Input horizontal padding */
  --input-padding-y: 12px;           /* Input vertical padding */
  --input-height: 44px;              /* Input height */
  --input-gap: 16px;                 /* Input container gap */
  
  /* Section Gaps */
  --section-gap-sm: 24px;            /* Small section gap */
  --section-gap-md: 32px;            /* Medium section gap */
  --section-gap-lg: 44px;            /* Large section gap */
  --section-gap-xl: 48px;            /* Extra large section gap */
  --section-gap-2xl: 56px;           /* 2X large section gap */
  
  /* ===== BORDER RADIUS ===== */
  --radius-none: 0px;
  --radius-sm: 4px;                   /* Progress bar segments */
  --radius-md: 8px;                   /* Labels, badges */
  --radius-lg: 12px;                  /* Feature cards, estimate modules */
  --radius-xl: 16px;
  --radius-2xl: 24px;                 /* Feature cards, review cards */
  --radius-3xl: 32px;                 /* Demo container, large cards */
  --radius-full: 9999px;               /* Fully rounded (buttons, pills, badges) */
  
  /* ===== SHADOWS ===== */
  --shadow-none: none;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-header: 0px 12px 24px rgba(0, 0, 0, 0.04); /* Header shadow */
  --shadow-glass: 0px 0px 16px rgba(0, 0, 0, 0.04); /* Glass effect (popups) */
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
  
  /* ===== EFFECTS ===== */
  /* Backdrop Filter */
  --backdrop-blur: blur(32px);        /* Header glassmorphism effect */
  
  /* ===== TRANSITIONS ===== */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --transition-ease: ease-in-out;
  
  /* ===== Z-INDEX ===== */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal: 400;
  --z-popover: 500;
  --z-tooltip: 600;
}
```

### 2. **Design Tokens**

- Tất cả design values (colors, fonts, spacing) phải được định nghĩa trong CSS variables
- Sử dụng semantic naming: `--color-primary` thay vì `--color-blue`
- Support dark mode nếu cần

### 3. **Component Styling**

- **Nếu dùng Tailwind**: Sử dụng utility classes
- **Nếu dùng CSS Modules**: Scoped styles
- **Nếu dùng Styled Components**: Component-level styles
- Không inline styles (trừ dynamic values)

### 4. **Header Component Specifications**

Dựa trên Figma design, header có các đặc điểm sau:

#### **Layout Structure:**
```css
/* Navigation Container */
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
  width: 100%;
  max-width: 1400px;
  height: 68px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(32px);
  position: fixed; /* hoặc sticky */
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
}

/* Container Inside Navigation */
.navigation-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1168px;
  height: 68px;
  gap: 150px; /* hoặc 150.49px */
}
```

#### **Logo Specifications:**
- **Width**: 187.89px
- **Height**: 40px
- **Brand Mark**: 
  - Primary color: `#6366F1` (indigo)
  - Accent color: `#FA6985` (pink)
- **Text "easy nails"**: 
  - Color: `#1F2937` (dark gray)
  - Font: Inter
- **Text "POS"**: 
  - Color: `#6366F1` (indigo)
  - Font: Inter

#### **Navigation Links:**
```css
.nav-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  height: 68px;
  
  /* Typography */
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: #374151;
  
  /* Hover states cần được define */
  transition: color var(--transition-base) var(--transition-ease);
}
```

**Navigation Items:**
- Solutions
- Who It's For
- Pricing
- About
- Contact

#### **Button Specifications:**

**1. Outline Button (Free Demo):**
```css
.button-outline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  width: 132px;
  height: 44px;
  border: 2px solid #4F46E5;
  border-radius: 9999px;
  background: transparent;
  
  /* Typography */
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: #4F46E5;
  
  /* Hover states cần được define */
  transition: all var(--transition-base) var(--transition-ease);
}
```

**2. Filled Button (Get Started):**
```css
.button-filled {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  width: 138px;
  height: 44px;
  background: #4F46E5;
  border-radius: 9999px;
  border: none;
  
  /* Typography */
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  
  /* Hover states cần được define */
  transition: all var(--transition-base) var(--transition-ease);
}
```

#### **CTA Container:**
```css
.cta-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 282px;
  height: 44px;
}
```

#### **Responsive Behavior:**
- **Desktop (≥992px)**: Full navigation với tất cả links và buttons
- **Tablet (768px - 991px)**: Có thể collapse một số items
- **Mobile (<768px)**: Hamburger menu, logo và CTA buttons

---

### 5. **Button Component System**

#### **Button Variants:**

**1. Small Button (44px height):**
```css
.button-sm {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  height: 44px;
  border-radius: 9999px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  
  transition: all var(--transition-base) var(--transition-ease);
}

.button-sm-filled {
  background: #4F46E5;
  color: #FFFFFF;
  border: none;
}

.button-sm-outline {
  background: transparent;
  color: #4F46E5;
  border: 2px solid #4F46E5;
}
```

**2. Medium Button (52px height):**
```css
.button-md {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 8px;
  height: 52px;
  border-radius: 9999px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  
  transition: all var(--transition-base) var(--transition-ease);
}

.button-md-filled {
  background: #4F46E5;
  color: #FFFFFF;
  border: none;
}

.button-md-outline {
  background: transparent;
  color: #4F46E5;
  border: 2px solid #4F46E5;
}
```

**3. Button with Icon:**
- Icon size: 16px
- Gap between icon and label: 8px
- Icon color matches text color

---

### 6. **Typography Component System**

#### **Headings:**

**Hero Headline (Display):**
```css
.heading-hero {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
  letter-spacing: -0.75px;
  background: linear-gradient(90deg, #FA6985 0%, #818CF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Page Title (H1):**
```css
.heading-h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #374151; /* hoặc gradient */
}
```

**Section Heading (H2):**
```css
.heading-h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #374151;
}
```

**Subheading (H4):**
```css
.heading-h4 {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF; /* hoặc #374151 */
}
```

**Lead Paragraph:**
```css
.text-lead {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #374151; /* hoặc #475569 */
}
```

**Body Text:**
```css
.text-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #374151;
}
```

**Secondary Text:**
```css
.text-secondary {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #9CA3AF;
}
```

**Caption:**
```css
.text-caption {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  color: #374151;
}
```

**KPI/Large Stat:**
```css
.text-kpi {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.25px;
  color: #374151;
}
```

---

### 7. **Label/Badge Component**

```css
.label {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  height: 36px;
  background: #FFFFFF; /* hoặc #EEF2FF, #FFF6F8 */
  border-radius: 8px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #1F2937;
}

.label-icon {
  width: 16px;
  height: 16px;
  /* Icon color: #F9A8D4 (pink) */
}
```

**Label Variants:**
- White background: `#FFFFFF`
- Indigo background: `#EEF2FF`
- Pink background: `#FFF6F8`

---

### 8. **Card/Feature Component**

```css
.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;
  width: 245px;
  height: 172px;
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 24px;
  position: relative;
}

.feature-icon {
  display: flex;
  align-items: flex-start;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 24px;
  /* Background: #EEF2FF (indigo), #FFF6F8 (pink), #ECFDF5 (green) */
}

.feature-icon svg {
  width: 24px;
  height: 24px;
  /* Color: #4F46E5, #FA6985, #10B981 */
}

.feature-title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #1F2937;
}

.feature-description {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  color: #374151;
}

.feature-price {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.15px;
  /* Color: #4F46E5, #FA6985, #10B981 */
}
```

---

### 9. **Input Component**

```css
.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  height: 44px;
  background: rgba(0, 0, 0, 0.48);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #9CA3AF;
}

.input::placeholder {
  color: #9CA3AF;
}
```

**Input Container (with button):**
```css
.input-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px;
  gap: 16px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.48);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
```

---

### 10. **Review/Testimonial Component**

```css
.review-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px;
  gap: 20px;
  width: 368px;
  height: 232px;
  background: #FFFFFF;
  border-radius: 24px;
}

.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}

.star {
  width: 16px;
  height: 16px;
  background: #FACC15;
  border: 2px solid #FACC15;
}

.review-text {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.15px;
  color: #374151;
}

.review-author {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #374151;
}

.review-company {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #374151;
}

.review-badge {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  background: #ECFDF5;
  border-radius: 9999px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #10B981;
}
```

---

### 11. **Section Layout Patterns**

**Standard Section:**
```css
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0px;
  gap: 48px; /* hoặc 44px, 56px */
  width: 100%;
  max-width: 1400px;
}

.section-container {
  width: 100%;
  max-width: 1168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px; /* hoặc 48px, 56px */
}
```

**Section with Background:**
- Blue background: `#EFF6FF` (testimonials)
- Gray background: `#F9FAFB` (custom section)
- Gradient background: `linear-gradient(0deg, #FFF6F8 0%, #E0E7FF 100%)` (CTA)

**Section Heading Pattern:**
```css
.section-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 568px; /* hoặc 768px */
  text-align: center;
}
```

---

### 12. **Decor Elements**

**Gradient Decor Line:**
```css
.decor-line {
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, #FA6985 0%, #818CF8 100%);
  border-radius: 9999px;
}
```

**Bullet Point with Check:**
```css
.bullet-point {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.check-icon {
  width: 20px;
  height: 20px;
  /* Check color: #10B981 */
}

.bullet-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #374151;
}
```

---

### 13. **Value/KPI Component**

```css
.value-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 280px;
  height: 128px;
}

.value-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 48px;
  height: 48px;
  background: #EFF6FF;
  border-radius: 9999px;
}

.value-icon svg {
  width: 24px;
  height: 24px;
  /* Color: #3B82F6 */
}

.value-number {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #374151;
}

.value-label {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #374151;
}
```

---

### 14. **Footer Component**

**Footer Structure:**
```css
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 596px;
  background: #111827;
}

.footer-container {
  width: 100%;
  max-width: 1168px;
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.footer-subscription {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 48px 0px;
  gap: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 56px;
}

.footer-company {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 568px;
}

.footer-logo {
  /* Logo với màu #9CA3AF cho footer */
}

.footer-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9CA3AF;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9CA3AF;
}

.footer-links {
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 544px;
}

.footer-link-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 160px;
}

.footer-link-title {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
}

.footer-link {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9CA3AF;
}

.footer-note {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 0px;
  gap: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-copyright {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #9CA3AF;
}

.footer-legal {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
}

.footer-legal-link {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
  color: #9CA3AF;
}
```

---

### 15. **Component Usage Guidelines**

1. **Consistency**: Luôn sử dụng CSS variables thay vì hardcode values
2. **Responsive**: Tất cả components phải responsive, mobile-first
3. **Accessibility**: Đảm bảo contrast ratios và ARIA labels
4. **i18n**: Tất cả text phải sử dụng translation keys
5. **Performance**: Lazy load images, optimize assets
6. **Reusability**: Components phải reusable và configurable

---

## 🎨 TAILWIND CSS + FRAMER MOTION APPROACH

### **📌 Lý do chọn Hybrid Approach:**

Chúng ta sử dụng **Tailwind CSS + Framer Motion** kết hợp với **CSS Variables** để có được:
- ✅ **Code gọn gàng**: Tailwind utility classes thay vì CSS files dài
- ✅ **Animation mượt mà**: Framer Motion cho transitions và interactions
- ✅ **Design system nhất quán**: CSS Variables vẫn được giữ làm source of truth
- ✅ **Responsive nhanh**: Tailwind's responsive prefixes (`md:`, `lg:`, etc.)
- ✅ **Performance tốt**: Tree-shaking unused CSS, optimized animations
- ✅ **Developer experience**: IntelliSense, auto-complete, type-safe

---

### **1. Tailwind CSS Configuration**

#### **tailwind.config.js Setup:**

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Map Tailwind colors to CSS Variables
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        // ... other colors
      },
      // Map typography
      fontSize: {
        'hero': ['var(--font-size-hero)', { lineHeight: 'var(--line-height-hero)' }],
        'h1': ['var(--font-size-h1)', { lineHeight: 'var(--line-height-h1)' }],
        // ... other sizes
      },
      // Map spacing, radius, shadows
      spacing: {
        'section': 'var(--spacing-section)',
        'container': 'var(--spacing-container)',
      },
    },
  },
}
```

#### **Cách sử dụng:**

```tsx
// ❌ BAD: Hardcoded values
<div className="bg-[#6366F1] text-[72px] rounded-[24px]">

// ✅ GOOD: Sử dụng design tokens
<div className="bg-primary text-hero rounded-xl">
```

---

### **2. Framer Motion Guidelines**

#### **Animation Patterns:**

```tsx
import { motion } from 'framer-motion'

// 1. Fade In Animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// 2. Slide Up Animation
const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// 3. Stagger Children
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
}

// Usage
<motion.div
  variants={container}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={slideUp}>Title</motion.h1>
  <motion.p variants={slideUp}>Description</motion.p>
</motion.div>
```

#### **Hover & Interaction Animations:**

```tsx
// Button with hover scale
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  className="px-8 py-4 bg-primary rounded-full"
>
  Click me
</motion.button>

// Card with hover glow
<motion.div
  whileHover={{ 
    boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
    transition: { duration: 0.3 }
  }}
  className="p-6 bg-white rounded-xl border border-gray-200"
>
  Card content
</motion.div>
```

#### **Modal/Popup Animations:**

```tsx
import { AnimatePresence } from 'framer-motion'

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="bg-white rounded-2xl p-8">
        Modal content
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

---

### **3. Component Structure Best Practices**

#### **Modern Component Example:**

```tsx
'use client' // If using Next.js

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const HeroSection = () => {
  const { t } = useLanguage()
  const [showModal, setShowModal] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-gray-300">{t('hero.badge')}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-hero font-bold mb-6"
        >
          {t('hero.title')}{' '}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            {t('hero.highlight')}
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-accent to-primary text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-shadow"
          >
            <span className="flex items-center gap-2">
              {t('cta.primary')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
```

---

### **4. Styling Guidelines**

#### **✅ DO:**

```tsx
// Use Tailwind for layout and utilities
<div className="flex items-center justify-between gap-4 px-6 py-4">

// Use design tokens
<h1 className="text-hero font-bold text-primary">

// Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Combine with motion
<motion.div 
  whileHover={{ scale: 1.05 }}
  className="p-6 bg-white rounded-xl shadow-glass"
>
```

#### **❌ DON'T:**

```tsx
// ❌ Hardcode values
<div className="text-[72px] text-[#6366F1]">

// ❌ Mix inline styles (except for dynamic values)
<div style={{ color: '#6366F1' }} className="text-hero">

// ❌ Create separate CSS file for simple layouts
// Use Tailwind instead
```

#### **When to use CSS files:**

- Complex animations không thể làm với Framer Motion
- Global styles (reset, base)
- CSS Variables definitions
- Specific component styles có logic phức tạp

---

### **5. Icon System**

**Sử dụng `lucide-react` cho icons:**

```tsx
import { ArrowRight, Check, Star, Menu, X } from 'lucide-react'

// Icon trong button
<button className="flex items-center gap-2">
  <span>Get Started</span>
  <ArrowRight size={16} />
</button>

// Icon với animation
<motion.div
  whileHover={{ rotate: 90 }}
  transition={{ duration: 0.3 }}
>
  <ArrowRight size={24} />
</motion.div>

// Custom color and size
<Check size={20} className="text-success" />
```

---

### **6. Performance Optimizations**

#### **Tailwind Purging:**

Tailwind tự động remove unused CSS khi build:

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Purge unused styles automatically
}
```

#### **Framer Motion Optimization:**

```tsx
// Reduce motion for accessibility
import { motion, useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

<motion.div
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: shouldReduceMotion ? 0 : 0.6,
  }}
>

// Use layout animations carefully
<motion.div layout>
  {/* Only use when needed */}
</motion.div>

// Avoid animating expensive properties
// ✅ GOOD: opacity, transform
// ❌ BAD: width, height, top, left
```

---

### **7. Migration Strategy (từ CSS files sang Tailwind)**

#### **Step 1: Identify component**
```tsx
// Before (HeroSection.tsx + HeroSection.css)
import './HeroSection.css'
<div className="hero-section">
```

#### **Step 2: Convert CSS to Tailwind**
```tsx
// After (Tailwind only)
<section className="relative min-h-screen flex items-center px-6 py-32">
```

#### **Step 3: Add animations**
```tsx
// Add Framer Motion
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative min-h-screen flex items-center px-6 py-32"
>
```

#### **Step 4: Clean up**
- Xóa file `.css` không dùng
- Update exports
- Test responsiveness

---

### **8. Common Patterns**

#### **Glassmorphism Effect:**

```tsx
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-glass">
  Glass content
</div>
```

#### **Gradient Text:**

```tsx
<h1 className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
  Gradient Headline
</h1>
```

#### **Grid Layout:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <motion.div
      key={item.id}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl"
    >
      {item.content}
    </motion.div>
  ))}
</div>
```

#### **Section Container:**

```tsx
<section className="py-section">
  <div className="max-w-[var(--container-max-width)] mx-auto px-container">
    {/* Content */}
  </div>
</section>
```

---

### **9. Accessibility with Animations**

```tsx
// Always provide reduced motion support
const shouldReduceMotion = useReducedMotion()

<motion.div
  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
  animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
>

// Keep focus states visible
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">

// Announce state changes to screen readers
<button aria-label="Open menu" aria-expanded={isOpen}>
```

---

### **10. File Organization with New Approach**

```
components/
├── sections/
│   └── HeroSection/
│       ├── HeroSection.tsx       # Component with Tailwind + Framer Motion
│       └── index.ts               # Export
│       # ❌ NO MORE HeroSection.css
```

---

### **✅ Checklist khi code component mới:**

- [ ] Sử dụng Tailwind classes thay vì CSS file
- [ ] Map CSS Variables vào Tailwind config
- [ ] Thêm Framer Motion cho animations
- [ ] Sử dụng `lucide-react` cho icons
- [ ] Implement responsive với `md:`, `lg:` prefixes
- [ ] Support reduced motion
- [ ] Test accessibility (focus states, ARIA labels)
- [ ] Optimize animations (opacity, transform only)
- [ ] Verify design tokens consistency
- [ ] Clean up unused CSS files

---

## ⚡ PERFORMANCE

### 1. **Code Splitting**

- Lazy load routes
- Lazy load heavy components
- Dynamic imports cho third-party libraries

### 2. **Image Optimization**

- Sử dụng WebP format
- Responsive images với `srcset`
- Lazy loading với `loading="lazy"`
- Placeholder images (blur-up technique)

### 3. **Bundle Optimization**

- Tree shaking
- Minify CSS/JS
- Gzip/Brotli compression
- CDN cho static assets

### 4. **Performance Metrics**

- Lighthouse score > 90
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.8s

---

## 🔍 SEO & ACCESSIBILITY

### 1. **SEO Best Practices**

- Semantic HTML5
- Meta tags đầy đủ (title, description, og tags)
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt
- Canonical URLs

### 2. **Accessibility (a11y)**

- ARIA labels cho interactive elements
- Keyboard navigation support
- Focus indicators rõ ràng
- Color contrast ratio ≥ 4.5:1
- Alt text cho images
- Screen reader friendly

### 3. **Semantic HTML**

```html
<!-- Good -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <article>...</article>
  </section>
</main>
<footer>...</footer>

<!-- Bad -->
<div class="header">
  <div class="nav">...</div>
</div>
```

---

## 🔄 GIT WORKFLOW

### 1. **Branch Strategy**

- `main` - Production ready code
- `develop` - Development branch
- `feature/feature-name` - Feature branches
- `fix/bug-name` - Bug fix branches

### 2. **Commit Messages**

```
feat: Add hero section component
fix: Resolve mobile menu toggle issue
style: Update button hover effects
refactor: Optimize image loading
docs: Update README with setup instructions
```

### 3. **Code Review**

- Tất cả code phải được review trước khi merge
- CI/CD checks phải pass
- Tests phải pass

---

## 📦 DEPENDENCIES

### Core Dependencies (sẽ được cập nhật trong package.json):
- React/Vue
- TypeScript
- Vite/Webpack
- Tailwind CSS hoặc CSS Modules
- react-i18next/vue-i18n
- React Router/Vue Router

### Dev Dependencies:
- ESLint
- Prettier
- Husky (git hooks)
- lint-staged
- TypeScript

---

## ✅ CHECKLIST TRƯỚC KHI DEPLOY

- [ ] Tất cả translations đầy đủ
- [ ] Responsive trên tất cả breakpoints
- [ ] Performance score > 90
- [ ] SEO meta tags đầy đủ
- [ ] Accessibility audit pass
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] No console errors
- [ ] All images optimized
- [ ] Code review completed

---

## 📚 TÀI LIỆU THAM KHẢO

### **Project Documentation:**
- 📖 **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Chi tiết về cấu trúc, tech stack, và maintenance
- 📖 **[README.md](./README.md)** - Quick start guide
- 📖 **This file (DEVELOPMENT_RULES.md)** - Development guidelines và design system

### **External Resources:**
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [react-i18next Documentation](https://react.i18next.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Web.dev Performance](https://web.dev/performance)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📝 DESIGN SYSTEM SUMMARY

### **Color Palette:**
- **Primary**: `#6366F1` (Indigo 500) - Logo, primary elements
- **Primary Dark**: `#4F46E5` (Indigo 600) - Buttons, borders
- **Accent**: `#FA6985` (Pink) - Brand mark, highlights
- **Success**: `#10B981` (Green 500) - Success states, badges
- **Warning**: `#FACC15` (Yellow 400) - Star ratings
- **Text Primary**: `#1F2937` (Gray 800) - Headings, logo text
- **Text Secondary**: `#374151` (Gray 700) - Navigation, body text
- **Text Muted**: `#9CA3AF` (Gray 400) - Footer text, secondary content
- **Background Overlay**: `rgba(255, 255, 255, 0.72)` - Header glassmorphism
- **Background Dark**: `#111827` (Gray 900) - Footer background

### **Typography Scale:**
- **Font Family**: `Inter` (Primary font)
- **Hero Headline**: 72px, weight 700, line-height 80px
- **Page Title (H1)**: 48px, weight 600, line-height 56px
- **Section Heading (H2)**: 36px, weight 600, line-height 44px
- **Subheading (H4)**: 20px, weight 500, line-height 28px
- **Lead Paragraph**: 20px, weight 400, line-height 36px
- **Body Text**: 16px, weight 400, line-height 24px
- **Secondary Text**: 14px, weight 400, line-height 20px
- **Caption**: 12px, weight 400, line-height 16px
- **KPI/Large Stat**: 36px, weight 700, line-height 44px

### **Button System:**
- **Small Button**: 44px height, 12px 24px padding
- **Medium Button**: 52px height, 16px 32px padding
- **Border Radius**: `9999px` (fully rounded)
- **Variants**: Filled, Outline
- **Icon Size**: 16px, gap 8px

### **Component Sizes:**
- **Header**: 68px height, 36px horizontal padding
- **Container**: 1168px max-width
- **Section Padding**: 64px vertical, 48px horizontal
- **Card Padding**: 24px
- **Feature Card**: 245px × 172px
- **Review Card**: 368px × 232px
- **Input**: 44px height, 12px 20px padding

### **Border Radius:**
- **Small**: 4px (progress bars)
- **Medium**: 8px (labels, badges)
- **Large**: 12px (feature cards)
- **Extra Large**: 24px (feature cards, reviews)
- **3XL**: 32px (demo container)
- **Full**: 9999px (buttons, pills)

### **Shadows:**
- **Header**: `0px 12px 24px rgba(0, 0, 0, 0.04)`
- **Glass**: `0px 0px 16px rgba(0, 0, 0, 0.04)`

### **Gradients:**
- **Primary**: `linear-gradient(90deg, #FA6985 0%, #818CF8 100%)`
- **Primary Alt**: `linear-gradient(90deg, #FA6985 0%, #4F46E5 100%)`
- **CTA Background**: `linear-gradient(0deg, #FFF6F8 0%, #E0E7FF 100%)`

### **Components Defined:**
✅ Header/Navigation  
✅ Buttons (Small & Medium variants)  
✅ Typography System (Hero, H1-H4, Body, Caption, KPI)  
✅ Labels/Badges  
✅ Feature Cards  
✅ Input Components  
✅ Review/Testimonial Cards  
✅ Value/KPI Cards  
✅ Footer (Full structure)  
✅ Section Layouts  
✅ Decor Elements  

---

**✅ Đã cập nhật đầy đủ design system từ toàn bộ homepage Figma design bao gồm:**
- **Màu sắc**: Primary, Accent, Success, Warning, Text colors, Backgrounds, Gradients
- **Typography**: Đầy đủ scale từ 12px đến 72px với line-heights và weights
- **Components**: 15+ component patterns với specifications chi tiết
- **Spacing**: Component-specific spacing và section gaps
- **Effects**: Shadows, gradients, backdrop filters

---

## 🎓 ONBOARDING & MAINTENANCE

### **🆕 Cho Developers Mới:**

1. **Đọc file này trước** (DEVELOPMENT_RULES.md) để hiểu design system
2. **Đọc [ARCHITECTURE.md](./ARCHITECTURE.md)** để hiểu tech stack và cấu trúc
3. **Xem ví dụ:** `src/components/sections/HeroSection/` - Example component
4. **Run project:** `npm install` → `npm run dev`
5. **Thử modify:** Thay đổi text trong HeroSection, xem kết quả

### **🔧 Khi Maintain/Update:**

| Task | Where to Look |
|------|--------------|
| **Thay đổi màu sắc toàn bộ site** | `src/styles/variables.css` → Update CSS Variables |
| **Thêm component mới** | Copy `HeroSection/`, rename, update content |
| **Thêm translations** | `src/i18n/locales/{lang}/common.json` |
| **Update animations** | Modify Framer Motion variants in component |
| **Fix responsive issues** | Update `md:`, `lg:` breakpoints in className |
| **Thay đổi font** | `src/styles/variables.css` → `--font-family-primary` |
| **Add new page** | Create in `src/pages/`, add route |

### **❓ Common Questions:**

**Q: Tại sao không có file `.css` cho mỗi component?**  
A: Chúng ta dùng Tailwind utilities directly trong JSX. Code gọn hơn, không cần maintain CSS files riêng. Xem [ARCHITECTURE.md](./ARCHITECTURE.md#styling-strategy).

**Q: Làm sao thay đổi màu primary toàn bộ site?**  
A: Update `--color-primary` trong `src/styles/variables.css`. Tailwind sẽ tự động apply cho tất cả components.

**Q: Tôi muốn thêm animation cho button, làm thế nào?**  
A: Dùng Framer Motion: `<motion.button whileHover={{ scale: 1.05 }}>`. Xem examples trong các sections.

**Q: Làm sao add thêm ngôn ngữ mới (ví dụ: tiếng Nhật)?**  
A: 1) Tạo folder `src/i18n/locales/ja/`, 2) Copy `common.json` từ `vi/` hoặc `en/`, 3) Translate, 4) Update `src/i18n/config.ts`.

**Q: Icon nào available? Làm sao tìm?**  
A: Tất cả icons từ [Lucide](https://lucide.dev/). Import: `import { IconName } from 'lucide-react'`.

### **🚀 Quick Commands:**

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Check code style

# Common Tasks
npm install              # Install dependencies
npm run dev -- --port 3000  # Change dev port
```

### **📊 Performance Tips:**

- ✅ Animate only `opacity` and `transform` (cheap)
- ❌ Avoid animating `width`, `height`, `top`, `left` (expensive)
- ✅ Use `loading="lazy"` for images
- ✅ Use Framer Motion's `useReducedMotion()` for accessibility
- ✅ Keep bundle size small (check with `npm run build`)

### **🔗 Related Files:**

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture decisions, tech stack reasoning
- **[README.md](./README.md)** - Setup instructions, quick start
- **[package.json](./package.json)** - Dependencies and scripts
- **[tailwind.config.js](./tailwind.config.js)** - Tailwind configuration
- **[src/styles/variables.css](./src/styles/variables.css)** - Design tokens

---

**Last Updated:** 2024-11-11  
**Version:** 2.0.0 (Updated to Tailwind + Framer Motion approach)

