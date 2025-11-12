# 💅 Easy Nail POS - Landing Page

Professional landing page cho Easy Nail POS được xây dựng với **React 18**, **TypeScript**, **Tailwind CSS**, và **Framer Motion**.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18+ | UI Framework |
| **TypeScript** | 5+ | Type Safety |
| **Vite** | 5+ | Build Tool (Fast HMR) |
| **Tailwind CSS** | 3.4 | Utility-First Styling |
| **Framer Motion** | Latest | Smooth Animations |
| **Lucide React** | Latest | Modern Icons |
| **react-i18next** | Latest | Internationalization |

---

## 📖 Documentation

Tất cả documentation nằm trong folder [`docs/`](./docs/):

| File | Purpose |
|------|---------|
| **[docs/README.md](./docs/README.md)** | 📚 Tổng quan documentation |
| **[docs/HERO_SECTION_GUIDE.md](./docs/HERO_SECTION_GUIDE.md)** | 📖 Hướng dẫn tạo hero section mới |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | 🏗️ Kiến trúc hệ thống, lý do tech stack, patterns |
| **[DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md)** | 📐 Design system, component specs, guidelines |

**👉 Developers mới:** Đọc [ARCHITECTURE.md](./ARCHITECTURE.md) trước!

---

## ⚡ Quick Start

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Dev Server

```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5173`

### 3️⃣ Build for Production

```bash
npm run build
```

### 4️⃣ Preview Production Build

```bash
npm run preview
```

### 5️⃣ Lint Code

```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/              # ✅ Reusable components
│   │   ├── Button/          # Button component (no CSS file)
│   │   └── Container/       # Container wrapper
│   ├── layout/              # ✅ Layout components
│   │   ├── Header/          # Header with glassmorphism
│   │   └── Footer/          # Footer with subscription
│   └── sections/            # ✅ Page sections
│       ├── HeroSection/     # Hero with animations
│       ├── StatsSection/    # Statistics grid
│       ├── DemoSection/     # Demo showcase
│       └── CTASection/      # Call to action
├── pages/                   # Page components
├── i18n/                    # Translations (vi, en)
├── styles/                  # Global styles + CSS Variables
│   ├── variables.css        # ⭐ Design system tokens
│   ├── reset.css
│   ├── base.css
│   └── utilities.css
└── hooks/                   # Custom React hooks
```

**📚 Chi tiết:** Xem [ARCHITECTURE.md](./ARCHITECTURE.md#project-structure)

---

## 🎨 Styling Approach

### **Hybrid: Tailwind + CSS Variables**

```
CSS Variables (Design System)
        ↓
Tailwind Config (Maps variables)
        ↓
Components (Use Tailwind classes)
```

### **Example:**

```tsx
// ✅ Modern approach
<h1 className="text-hero font-bold text-primary">
  Headline
</h1>

// ❌ Old approach (we don't do this anymore)
import './Component.css'
<h1 className="component-heading">
```

**Why?** Xem [ARCHITECTURE.md](./ARCHITECTURE.md#styling-strategy)

---

## 🌍 Internationalization (i18n)

Hỗ trợ đa ngôn ngữ:
- 🇻🇳 **Tiếng Việt** (default)
- 🇺🇸 **English**

### Usage:

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<h1>{t('hero.headline')}</h1>
```

### Add New Language:

1. Create `src/i18n/locales/{lang}/common.json`
2. Add translations
3. Update `src/i18n/config.ts`

**📚 Chi tiết:** Xem [ARCHITECTURE.md](./ARCHITECTURE.md#internationalization-strategy)

---

## 📱 Responsive Design

**Mobile First** approach với Tailwind breakpoints:

| Breakpoint | Size | Tailwind Prefix |
|------------|------|-----------------|
| Mobile | < 768px | (default) |
| Tablet | 768px+ | `md:` |
| Desktop | 992px+ | `lg:` |
| Large Desktop | 1200px+ | `xl:` |

### Example:

```tsx
<div className="
  text-base        {/* Mobile: 16px */}
  md:text-lg       {/* Tablet: 18px */}
  lg:text-xl       {/* Desktop: 20px */}
">
```

---

## 🎭 Animations

Sử dụng **Framer Motion** cho animations mượt mà:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated content
</motion.div>
```

**📚 Patterns:** Xem [ARCHITECTURE.md](./ARCHITECTURE.md#common-patterns)

---

## 🧩 Components

### **Layout Components**
- **Header** - Navigation với glassmorphism, mobile menu
- **Footer** - Footer với subscription form, links, social icons

### **Section Components**
- **HeroSection** - Hero với gradient text, animated bullets
- **StatsSection** - KPI grid với số liệu thống kê
- **DemoSection** - Demo showcase với carousel dots
- **CTASection** - Final call-to-action với gradient background

### **Common Components**
- **Button** - Button với hover animations (no CSS file needed)
- **Container** - Responsive container wrapper

**📚 Component specs:** Xem [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md#styling--design-system)

---

## 🎯 Key Features

✅ **Modern Stack:** React 18 + TypeScript + Vite  
✅ **Tailwind CSS:** Utility-first, fast development  
✅ **Framer Motion:** Smooth animations  
✅ **Responsive:** Mobile-first design  
✅ **i18n:** Multi-language support  
✅ **Type-Safe:** Full TypeScript coverage  
✅ **Performance:** Optimized builds, code splitting  
✅ **Accessible:** ARIA labels, keyboard navigation  
✅ **Maintainable:** Clear structure, well-documented  

---

## 🛠️ Common Tasks

### Change Colors Globally

Edit `src/styles/variables.css`:

```css
:root {
  --color-primary: #6366F1;  /* Change this */
}
```

### Add New Component

```bash
# 1. Create folder
mkdir -p src/components/sections/NewSection

# 2. Create component
touch src/components/sections/NewSection/NewSection.tsx

# 3. Use Tailwind + Framer Motion (no CSS file needed!)
```

### Add Translation

Edit `src/i18n/locales/vi/common.json`:

```json
{
  "newSection": {
    "title": "Tiêu đề mới"
  }
}
```

**📚 More tasks:** Xem [ARCHITECTURE.md](./ARCHITECTURE.md#maintenance-guidelines)

---

## ⚡ Performance

| Metric | Target | Status |
|--------|--------|--------|
| Bundle Size (JS) | < 200KB | ✅ Optimized |
| Bundle Size (CSS) | < 50KB | ✅ ~5KB (Tailwind purged) |
| Lighthouse Score | > 90 | 🔜 To be tested |
| First Contentful Paint | < 1.8s | 🔜 To be tested |

---

## ♿ Accessibility

- ✅ Semantic HTML5
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ≥ 4.5:1
- ✅ Reduced motion support

---

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type check
npm run type-check

# Run dev server (for manual testing)
npm run dev
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Output: `dist/` folder

### Preview Build Locally

```bash
npm run preview
```

### Deploy

Deploy `dist/` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting

---

## 🤝 Contributing

### For New Developers:

1. **Read documentation:**
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - Understand the system
   - [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md) - Follow guidelines

2. **Setup project:**
   ```bash
   npm install
   npm run dev
   ```

3. **Make changes:**
   - Follow existing component patterns
   - Use Tailwind + Framer Motion
   - Add translations for new text
   - Test responsive design

4. **Commit:**
   ```bash
   git add .
   git commit -m "feat: Add new feature"
   ```

### Commit Message Format:

```
feat: Add new hero section
fix: Resolve mobile menu toggle
style: Update button hover effects
docs: Update README
refactor: Optimize image loading
```

---

## 📚 Resources

### Project Docs
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture & Tech Stack
- [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md) - Guidelines & Design System

### External Docs
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [react-i18next](https://react.i18next.com/)

---

## 🐛 Troubleshooting

### Dev server không start

```bash
# Clear node_modules và reinstall
rm -rf node_modules
npm install
npm run dev
```

### Tailwind classes không work

Check `tailwind.config.js` content paths:

```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### CSS Variables không apply

Check `src/index.css` import order:

```css
/* Variables MUST be first */
@import './styles/variables.css';
@import './styles/reset.css';
@import './styles/base.css';

/* Then Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📞 Support

Questions? Check:
1. [ARCHITECTURE.md](./ARCHITECTURE.md) - Common Questions section
2. [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md) - Onboarding section
3. Project documentation in code comments

---

**Last Updated:** 2024-11-11  
**Version:** 2.0.0 (Tailwind + Framer Motion)  
**License:** MIT
# NailPOS-Landingpage
