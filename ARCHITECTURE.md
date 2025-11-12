# 🏗️ ARCHITECTURE DOCUMENTATION

## 📋 Table of Contents
1. [Tech Stack Overview](#tech-stack-overview)
2. [Why This Architecture](#why-this-architecture)
3. [Project Structure](#project-structure)
4. [Styling Strategy](#styling-strategy)
5. [Component Architecture](#component-architecture)
6. [State Management](#state-management)
7. [Internationalization Strategy](#internationalization-strategy)
8. [Performance Considerations](#performance-considerations)
9. [Maintenance Guidelines](#maintenance-guidelines)
10. [Common Patterns](#common-patterns)

---

## 🎯 TECH STACK OVERVIEW

### **Current Stack (2024):**

```
Frontend Framework:  React 18+ + TypeScript
Build Tool:          Vite 5+
Styling:             Tailwind CSS v3.4 + CSS Variables
Animation:           Framer Motion
Icons:               Lucide React
i18n:                react-i18next
```

### **Why This Stack?**

| Technology | Reason | Alternative Considered |
|------------|--------|----------------------|
| **React 18+** | Industry standard, large ecosystem, hooks API | Vue 3, Next.js |
| **TypeScript** | Type safety, better DX, fewer bugs | JavaScript |
| **Vite** | Fastest build tool, HMR, modern | Webpack, Parcel |
| **Tailwind CSS** | Utility-first, rapid development, smaller bundle | CSS Modules, Styled Components |
| **Framer Motion** | Best animation library for React, declarative | GSAP, React Spring |
| **Lucide React** | Modern, tree-shakeable, consistent | React Icons, Heroicons |
| **react-i18next** | Most popular, flexible, SSR support | react-intl, FormatJS |

---

## 🤔 WHY THIS ARCHITECTURE?

### **Problem Solved:**

1. **Code Duplication** → Tailwind utilities reduce CSS duplication
2. **Maintenance Burden** → Fewer CSS files = easier to maintain
3. **Bundle Size** → Tailwind purges unused CSS, Vite optimizes bundles
4. **Animation Complexity** → Framer Motion simplifies complex animations
5. **Design Consistency** → CSS Variables ensure consistent design tokens
6. **Developer Experience** → IntelliSense, TypeScript, fast HMR

### **Hybrid Approach: Tailwind + CSS Variables**

```
┌─────────────────────────────────────────┐
│         Design System (Source of Truth) │
│         CSS Variables in variables.css  │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Tailwind Config (tailwind.config)  │
│      Maps CSS Variables to Tailwind     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         Components (React + TSX)        │
│    Use Tailwind classes in className    │
│    Framer Motion for animations         │
└─────────────────────────────────────────┘
```

**Benefits:**
- ✅ Design system remains centralized in CSS Variables
- ✅ Tailwind provides utility classes for rapid development
- ✅ Easy to change colors/fonts globally (just update CSS Variables)
- ✅ No need to write/maintain separate CSS files per component
- ✅ Smaller bundle size (Tailwind purges unused CSS)

---

## 📁 PROJECT STRUCTURE

### **Current Structure:**

```
/Users/vophuong/Documents/Nail-Pos-Landingpage/
├── public/                     # Static assets
│   ├── images/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/            # ✅ Shared components (cross-section)
│   │   │   ├── GradientHeadline/  # Dùng cho Hero + Forms
│   │   │   │   ├── GradientHeadline.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Badge/             # Dùng cho Hero sections
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Description/      # Dùng cho Hero sections
│   │   │   │   ├── Description.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   └── Container/
│   │   │       ├── Container.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/            # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── index.ts
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── sections/          # Page sections
│   │       ├── HeroSection/
│   │       │   ├── HeroSectionHome.tsx      # Home page hero
│   │       │   ├── HeroSectionSolutions.tsx # Solutions page hero
│   │       │   ├── HeroSection.old.tsx      # Backup (không xóa)
│   │       │   └── index.ts
│   │       ├── StatsSection/
│   │       ├── DemoSection/
│   │       └── CTASection/
│   │
│   ├── pages/                 # Page components
│   │   └── HomePage.tsx
│   │
│   ├── i18n/                  # Internationalization
│   │   ├── locales/
│   │   │   ├── vi/common.json
│   │   │   └── en/common.json
│   │   ├── config.ts
│   │   └── index.ts
│   │
│   ├── styles/                # Global styles
│   │   ├── variables.css      ✅ CSS Variables (Design System)
│   │   ├── reset.css          ✅ CSS Reset
│   │   ├── base.css           ✅ Base styles
│   │   └── utilities.css      ✅ Utility classes
│   │
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   │
│   ├── index.css              ✅ Main CSS entry (Tailwind + imports)
│   ├── App.tsx
│   └── main.tsx
│
├── tailwind.config.js         ✅ Tailwind configuration
├── postcss.config.js          ✅ PostCSS configuration
├── vite.config.ts             ✅ Vite configuration
├── tsconfig.json              ✅ TypeScript configuration
├── package.json
├── DEVELOPMENT_RULES.md       📖 Development guidelines
└── ARCHITECTURE.md            📖 This file
```

### **Key Differences from Traditional Approach:**

| Traditional | Our Approach | Why? |
|------------|--------------|------|
| Separate `.css` file per component | No CSS files, use Tailwind classes | Less boilerplate, faster dev |
| CSS Modules or BEM | Tailwind utilities | Better DX, smaller bundle |
| Custom animation CSS | Framer Motion | Smoother, easier to maintain |
| SVG icon files | Lucide React components | Tree-shakeable, consistent |
| Inline styles for dynamic values | CSS Variables + Tailwind | Type-safe, maintainable |

---

## 🎨 STYLING STRATEGY

### **Three Layers of Styling:**

#### **Layer 1: Design System (CSS Variables)**
*File: `src/styles/variables.css`*

```css
:root {
  /* Colors */
  --color-primary: #6366F1;
  --color-accent: #FA6985;
  
  /* Typography */
  --font-size-hero: 72px;
  --line-height-hero: 80px;
  
  /* Spacing */
  --spacing-section: 64px;
  
  /* etc... */
}
```

**Purpose:** Single source of truth for all design values.

#### **Layer 2: Tailwind Configuration**
*File: `tailwind.config.js`*

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      fontSize: {
        hero: ['var(--font-size-hero)', { lineHeight: 'var(--line-height-hero)' }],
      },
    },
  },
}
```

**Purpose:** Maps CSS Variables to Tailwind utility classes.

#### **Layer 3: Component Styling**
*File: `components/**/*.tsx`*

```tsx
<h1 className="text-hero font-bold text-primary">
  Headline
</h1>
```

**Purpose:** Use Tailwind utilities in components.

### **Why This Approach?**

✅ **Centralized Design System:** Change one CSS variable, affects entire app  
✅ **Developer Experience:** IntelliSense suggests Tailwind classes  
✅ **Performance:** Tailwind purges unused CSS automatically  
✅ **Maintainability:** No need to manage separate CSS files  
✅ **Consistency:** Design tokens enforced through Tailwind config  

---

## 🧩 COMPONENT ARCHITECTURE

### **Component Pattern:**

```tsx
// components/sections/HeroSection/HeroSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center py-24"
    >
      <motion.h1
        variants={itemVariants}
        className="text-hero font-bold text-primary"
      >
        {t('hero.title')}
      </motion.h1>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-primary text-white rounded-full"
      >
        {t('buttons.getStarted')}
        <ArrowRight size={16} />
      </motion.button>
    </motion.section>
  );
};
```

### **Component Structure Rules:**

1. **One component per file**
2. **Export from index.ts**
3. **Use TypeScript for props**
4. **Use Tailwind for styling**
5. **Use Framer Motion for animations**
6. **Use Lucide for icons**
7. **Use react-i18next for translations**
8. **No separate CSS files** (except global styles)

### **Component Types:**

| Type | Location | Purpose | Example |
|------|----------|---------|---------|
| **Common** | `components/common/` | Reusable UI elements | Button, Input, Card |
| **Layout** | `components/layout/` | Page structure | Header, Footer, Container |
| **Sections** | `components/sections/` | Page sections | HeroSection, StatsSection |
| **Pages** | `pages/` | Full pages | HomePage, AboutPage |

---

## 🔄 STATE MANAGEMENT

### **Current Approach: React Hooks + Context API**

We use **local state** for most cases:

```tsx
// Simple component state
const [isOpen, setIsOpen] = useState(false);

// Translation hook
const { t, i18n } = useTranslation();

// Custom hooks
const isMobile = useMediaQuery('(max-width: 768px)');
```

### **When to Use Context:**

- Language switching (i18n already provides context)
- Theme switching (if dark mode is added)
- Global user state (if authentication is added)

### **Why Not Redux/Zustand?**

For a landing page, we don't need complex state management:
- ✅ Most state is local to components
- ✅ No complex data flows
- ✅ No authentication/user sessions yet
- ✅ Smaller bundle size without Redux

**If the app grows**, consider Zustand (lightweight alternative to Redux).

---

## 🌍 INTERNATIONALIZATION STRATEGY

### **Current Setup:**

```
src/i18n/
├── locales/
│   ├── vi/
│   │   └── common.json       ← Vietnamese translations
│   └── en/
│       └── common.json       ← English translations
├── config.ts                 ← i18n configuration
└── index.ts                  ← i18n initialization
```

### **Translation File Structure:**

```json
{
  "hero": {
    "label": "Chuyên dụng cho Nail Salon",
    "headline": "Quản lý salon nail chuyên nghiệp",
    "description": "Phần mềm quản lý hoàn chỉnh...",
    "bullet1": "Miễn phí 30 ngày",
    "bullet2": "Không yêu cầu thẻ tín dụng",
    "bullet3": "Hỗ trợ 24/7",
    "bullet4": "Cài đặt trong 5 phút"
  },
  "buttons": {
    "getStarted": "Bắt đầu ngay",
    "learnMore": "Tìm hiểu thêm",
    "freeDemo": "Demo miễn phí"
  },
  "navigation": {
    "solutions": "Giải pháp",
    "whoItsFor": "Dành cho ai",
    "pricing": "Bảng giá",
    "about": "Về chúng tôi",
    "contact": "Liên hệ"
  }
}
```

### **Usage in Components:**

```tsx
const { t } = useTranslation();

<h1>{t('hero.headline')}</h1>
<button>{t('buttons.getStarted')}</button>
```

### **Benefits:**

✅ **Scalable:** Easy to add new languages  
✅ **Organized:** Grouped by feature/section  
✅ **Type-safe:** Can add TypeScript types for translation keys  
✅ **Maintainable:** One file per language per namespace  

---

## ⚡ PERFORMANCE CONSIDERATIONS

### **What We Do:**

1. **Vite for Fast Builds**
   - Hot Module Replacement (HMR)
   - Code splitting by default
   - Optimized production builds

2. **Tailwind CSS Purging**
   - Automatically removes unused CSS
   - Only ships CSS that's actually used
   - Result: ~5KB CSS instead of ~3MB

3. **Framer Motion Optimization**
   - Animate only cheap properties (opacity, transform)
   - Avoid animating expensive properties (width, height)
   - Support reduced motion for accessibility

4. **Lazy Loading (Future)**
   - Image lazy loading: `loading="lazy"`
   - Route-based code splitting
   - Dynamic imports for heavy libraries

5. **Tree Shaking**
   - Lucide React only imports used icons
   - ES Modules for better tree shaking

### **Performance Metrics Target:**

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | > 90 | TBD |
| First Contentful Paint | < 1.8s | TBD |
| Largest Contentful Paint | < 2.5s | TBD |
| Time to Interactive | < 3.8s | TBD |
| Bundle Size (JS) | < 200KB | TBD |
| Bundle Size (CSS) | < 50KB | ~5KB |

---

## 🛠️ MAINTENANCE GUIDELINES

### **Adding a New Component:**

```bash
# 1. Create component folder
mkdir -p src/components/sections/NewSection

# 2. Create component file
touch src/components/sections/NewSection/NewSection.tsx

# 3. Create export file
touch src/components/sections/NewSection/index.ts
```

**NewSection.tsx:**
```tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const NewSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1168px] mx-auto px-6">
        <h2 className="text-h1 font-bold text-primary">
          {t('newSection.title')}
        </h2>
      </div>
    </section>
  );
};
```

**index.ts:**
```tsx
export { NewSection } from './NewSection';
```

### **Adding New Translations:**

```json
// src/i18n/locales/vi/common.json
{
  "newSection": {
    "title": "Tiêu đề mới",
    "description": "Mô tả mới"
  }
}
```

### **Adding New Design Tokens:**

```css
/* src/styles/variables.css */
:root {
  --color-new: #ABCDEF;
  --font-size-new: 20px;
}
```

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        new: 'var(--color-new)',
      },
      fontSize: {
        new: 'var(--font-size-new)',
      },
    },
  },
}
```

### **Updating an Existing Component:**

1. Open component file (e.g., `HeroSection.tsx`)
2. Modify Tailwind classes in `className`
3. Update animations in Framer Motion variants
4. Update translations in `locales/*/common.json`
5. Test responsiveness (`md:`, `lg:` breakpoints)
6. Check linter: `npm run lint`

---

## 🎯 COMMON PATTERNS

### **1. Scroll-Triggered Animations:**

```tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Content */}
    </motion.section>
  );
};
```

### **2. Hover Effects:**

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-primary text-white rounded-full"
>
  Click me
</motion.button>
```

### **3. Responsive Design:**

```tsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-6
">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

### **4. Gradient Text:**

```tsx
<h1 className="
  text-hero 
  font-bold 
  bg-gradient-to-r 
  from-accent 
  to-primary 
  bg-clip-text 
  text-transparent
">
  Gradient Headline
</h1>
```

### **5. Glassmorphism Effect:**

```tsx
<div className="
  bg-white/70 
  backdrop-blur-md 
  border 
  border-white/20 
  rounded-xl 
  shadow-glass
">
  Glass content
</div>
```

### **6. Icon with Text:**

```tsx
import { ArrowRight } from 'lucide-react';

<button className="flex items-center gap-2">
  <span>Get Started</span>
  <ArrowRight size={16} />
</button>
```

---

## 🚀 FUTURE IMPROVEMENTS

### **Potential Enhancements:**

1. **Dark Mode Support**
   - Add CSS Variables for dark theme
   - Use Context API for theme switching
   - Respect `prefers-color-scheme`

2. **Image Optimization**
   - Use Next.js Image component (if migrating to Next.js)
   - Or use `vite-plugin-image-optimizer`
   - Convert images to WebP

3. **Form Handling**
   - Add React Hook Form
   - Validation with Zod/Yup
   - Contact form integration

4. **Analytics**
   - Google Analytics 4
   - Event tracking for buttons/forms
   - Performance monitoring

5. **CMS Integration**
   - Sanity.io or Contentful
   - Dynamic content updates
   - No need to redeploy for content changes

6. **Testing**
   - Vitest for unit tests
   - Playwright for E2E tests
   - React Testing Library for component tests

---

## 📚 REFERENCES

### **Official Docs:**
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [react-i18next](https://react.i18next.com/)
- [Vite](https://vitejs.dev/)

### **Learning Resources:**
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [Framer Motion Tutorial](https://www.framer.com/motion/introduction/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🎓 ONBOARDING NEW DEVELOPERS

### **Quick Start:**

```bash
# 1. Clone repository
git clone <repo-url>
cd Nail-Pos-Landingpage

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
open http://localhost:5173
```

### **What to Read First:**

1. **This file** (`ARCHITECTURE.md`) - Understand the architecture
2. **DEVELOPMENT_RULES.md** - Development guidelines
3. **src/styles/variables.css** - Design system tokens
4. **tailwind.config.js** - Tailwind configuration
5. **src/components/sections/HeroSection/** - Example component

### **Common Questions:**

**Q: Why no CSS files in components?**  
A: We use Tailwind utilities directly in JSX. Faster development, smaller bundle.

**Q: How do I change colors/fonts globally?**  
A: Update CSS Variables in `src/styles/variables.css`.

**Q: Where do I add new translations?**  
A: `src/i18n/locales/{language}/common.json`.

**Q: How do I create a new page section?**  
A: Copy `HeroSection`, rename, update content, add to `HomePage.tsx`.

**Q: Do I need to write CSS for animations?**  
A: No, use Framer Motion. See examples in existing sections.

---

## ✅ CHECKLIST FOR NEW FEATURES

- [ ] Component uses TypeScript
- [ ] Component uses Tailwind classes (no separate CSS file)
- [ ] Animations use Framer Motion
- [ ] Icons use Lucide React
- [ ] All text uses `t()` from react-i18next
- [ ] Responsive design with `md:`, `lg:` breakpoints
- [ ] Accessibility: ARIA labels, keyboard navigation
- [ ] Performance: Animate only cheap properties
- [ ] Design tokens: Use Tailwind classes that map to CSS Variables
- [ ] No console errors or warnings
- [ ] Tested on mobile, tablet, desktop
- [ ] Translations added for all languages

---

**Last Updated:** 2024-11-11  
**Version:** 1.0.0  
**Maintainer:** Development Team

