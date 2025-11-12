# 📐 Coding Rules - Cấu Trúc Mới Nhất

## 🏗️ Cấu Trúc Source Code

### **Cấu Trúc Hiện Tại (2024)**

```
src/
├── components/
│   ├── common/                 # ✅ SHARED (cross-section)
│   │   ├── GradientHeadline/   # Dùng cho Hero + Forms
│   │   ├── Badge/              # Dùng cho Hero sections
│   │   ├── Description/        # Dùng cho Hero sections
│   │   ├── Button/
│   │   └── Container/
│   │
│   ├── layout/                 # Layout components
│   │   ├── Header/
│   │   └── Footer/
│   │
│   └── sections/               # Page sections
│       ├── HeroSection/
│       │   ├── HeroSectionHome.tsx
│       │   ├── HeroSectionSolutions.tsx
│       │   └── index.ts
│       ├── StatsSection/
│       ├── DemoSection/
│       └── CTASection/
│
├── pages/                      # Page components
│   └── HomePage.tsx
│
├── i18n/                       # Internationalization
│   ├── locales/
│   │   ├── vi/common.json
│   │   └── en/common.json
│   ├── config.ts
│   └── index.ts
│
├── styles/                     # Global styles ONLY
│   ├── variables.css           # Design System (CSS Variables)
│   ├── reset.css
│   ├── base.css
│   └── utilities.css
│
├── types/                      # TypeScript types
│   └── index.ts
│
├── index.css                   # Main CSS entry
├── App.tsx
└── main.tsx
```

---

## ✅ Rules Khi Code

### **1. Shared Components (`components/common/`)**

**Khi nào tạo:**
- Component được dùng ở **2+ sections khác nhau**
- Ví dụ: `GradientHeadline` dùng cho Hero + Forms

**Rules:**
- ✅ Props đơn giản, rõ ràng
- ✅ Không có logic phức tạp
- ✅ Export từ `index.ts`
- ✅ TypeScript types đầy đủ

**Ví dụ:**
```tsx
// ✅ ĐÚNG
export interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  iconColor?: string;
}

// ❌ SAI - Quá phức tạp
export interface BadgeProps {
  config: BadgeConfig;
  theme: Theme;
  // ...
}
```

---

### **2. Hero Sections (`components/sections/HeroSection/`)**

**Rules:**
- ✅ Mỗi page có 1 hero section riêng
- ✅ **Bắt buộc** dùng shared components (GradientHeadline, Badge, Description)
- ✅ Code riêng cho unique parts (stats, icons, custom layouts)
- ✅ Export từ `index.ts`

**Ví dụ:**
```tsx
// ✅ ĐÚNG - Dùng shared components
import { GradientHeadline } from '@/components/common/GradientHeadline';
import { Badge } from '@/components/common/Badge';

export const HeroSectionNewPage = () => {
  return (
    <section>
      <Badge text={t('newHero.badge')} icon={Heart} />
      <GradientHeadline text={t('newHero.headline')} />
      {/* Unique parts code riêng */}
    </section>
  );
};

// ❌ SAI - Không dùng shared components
export const HeroSectionNewPage = () => {
  return (
    <section>
      <div className="badge">...</div> {/* Code lại từ đầu */}
      <h1 className="headline">...</h1> {/* Code lại từ đầu */}
    </section>
  );
};
```

---

### **3. Component Structure**

**Mỗi component folder:**
```
ComponentName/
├── ComponentName.tsx    # Component code
└── index.ts            # Export
```

**Rules:**
- ✅ 1 component = 1 file
- ✅ Export từ `index.ts`
- ✅ TypeScript cho props
- ✅ Tailwind cho styling (không có CSS file riêng)
- ✅ Framer Motion cho animations

---

### **4. Styling Rules**

**✅ ĐÚNG:**
```tsx
// Dùng Tailwind classes
<div className="flex items-center gap-4 p-6 bg-white rounded-xl">

// Dùng CSS Variables qua Tailwind
<div className="text-primary bg-background-pink-light">

// Inline styles cho dynamic values
<div style={{ width: '568px', height: '668px' }}>
```

**❌ SAI:**
```tsx
// Không tạo CSS file riêng
// ComponentName.css ❌

// Không dùng CSS Modules
// import styles from './ComponentName.module.css' ❌
```

---

### **5. Translations (i18n)**

**Rules:**
- ✅ **Bắt buộc** dùng `t('key')` cho tất cả text
- ✅ Không hardcode text
- ✅ Thêm translations vào cả `en/common.json` và `vi/common.json`

**Ví dụ:**
```tsx
// ✅ ĐÚNG
const { t } = useTranslation();
<h1>{t('hero.headline')}</h1>

// ❌ SAI
<h1>Love Your Business Again</h1> // Hardcode
```

---

### **6. TypeScript Types**

**Rules:**
- ✅ Props interface cho mỗi component
- ✅ Export types từ `index.ts` nếu cần
- ✅ Types trong `src/types/index.ts` cho shared types

**Ví dụ:**
```tsx
// ✅ ĐÚNG
export interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  iconColor?: string;
}

export const Badge = ({ text, icon, iconColor }: BadgeProps) => {
  // ...
};
```

---

### **7. File Naming**

**Rules:**
- ✅ Component: `PascalCase.tsx` (ví dụ: `HeroSectionHome.tsx`)
- ✅ Folder: `PascalCase/` (ví dụ: `HeroSection/`)
- ✅ Types: `camelCase.ts` (ví dụ: `index.ts`)
- ✅ Backup files: `.old.tsx` (ví dụ: `HeroSection.old.tsx`)

---

### **8. Imports**

**Rules:**
- ✅ Dùng path aliases: `@/components/...`
- ✅ Group imports: React → Third-party → Internal
- ✅ Absolute imports (không dùng `../../`)

**Ví dụ:**
```tsx
// ✅ ĐÚNG
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/common/Container';
import { GradientHeadline } from '@/components/common/GradientHeadline';

// ❌ SAI
import { Container } from '../../../common/Container';
```

---

## 🚫 Không Được Làm

1. ❌ **Tạo CSS file riêng** cho component
2. ❌ **Hardcode text** (phải dùng translations)
3. ❌ **Duplicate code** (dùng shared components)
4. ❌ **Relative imports** (`../../`)
5. ❌ **Tạo folder rỗng** (xóa nếu không dùng)
6. ❌ **Xóa backup files** (`.old.tsx`)

---

## ✅ Checklist Khi Tạo Component Mới

- [ ] Component có folder riêng với `ComponentName.tsx` và `index.ts`
- [ ] Props interface với TypeScript
- [ ] Dùng Tailwind classes (không có CSS file)
- [ ] Dùng translations (`t('key')`)
- [ ] Export từ `index.ts`
- [ ] Dùng path aliases (`@/components/...`)
- [ ] Test responsive (mobile, tablet, desktop)

---

## 📚 Tham Khảo

- **Hero Section Guide**: [`docs/HERO_SECTION_GUIDE.md`](./HERO_SECTION_GUIDE.md)
- **Architecture**: [`../ARCHITECTURE.md`](../ARCHITECTURE.md)
- **Development Rules**: [`../DEVELOPMENT_RULES.md`](../DEVELOPMENT_RULES.md)

