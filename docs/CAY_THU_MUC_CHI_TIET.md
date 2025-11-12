# 📁 Giải Thích Chi Tiết Cây Thư Mục

Tài liệu này giải thích **chi tiết** từng thư mục và file trong project, tại sao cần nó, dùng làm gì, và file đó làm gì.

---

## 🗂️ Cấu Trúc Tổng Quan

```
Nail-Pos-Landingpage/
├── public/              # Files tĩnh (images, favicon)
├── src/                 # Source code chính
├── docs/                # Documentation
├── node_modules/       # Dependencies (tự động tạo)
├── package.json         # Dependencies và scripts
├── tailwind.config.js   # Config Tailwind CSS
├── vite.config.ts       # Config Vite build tool
└── tsconfig.json        # Config TypeScript
```

---

## 📂 public/ - Files Tĩnh

### **Tại sao cần?**
- Chứa các file **không cần xử lý** bởi build tool (Vite)
- Files này được copy nguyên vẹn vào folder `dist/` khi build
- Có thể truy cập trực tiếp từ URL: `/images/logo.svg`

### **Chứa gì?**
```
public/
├── images/              # Hình ảnh
│   ├── logo.svg         # Logo của website
│   └── hero-woman.jpg   # Hình hero section
└── favicon.ico          # Icon hiển thị trên browser tab
```

### **Ví dụ sử dụng:**
```tsx
// ✅ ĐÚNG - Dùng đường dẫn từ public/
<img src="/images/logo.svg" alt="Logo" />

// ❌ SAI - Không dùng import
import logo from '/images/logo.svg' // Không cần
```

---

## 📂 src/ - Source Code Chính

### **Tại sao cần?**
- Chứa **toàn bộ code** của ứng dụng
- Được xử lý bởi Vite (compile, bundle, optimize)
- TypeScript được compile thành JavaScript
- Tailwind CSS được process thành CSS thuần

---

## 📂 src/components/ - Components

### **Tại sao cần?**
- Chứa các **React components** tái sử dụng
- Tổ chức theo mục đích: `common/`, `layout/`, `sections/`

### **Cấu trúc:**
```
src/components/
├── common/              # Components dùng chung (cross-section)
├── layout/              # Components layout (Header, Footer)
└── sections/            # Components cho từng section của page
```

---

## 📂 src/components/common/ - Shared Components

### **Tại sao cần?**
- Chứa components được dùng ở **nhiều nơi khác nhau**
- Ví dụ: `GradientHeadline` dùng cho Hero + Forms
- Giúp **tránh duplicate code**, dễ maintain

### **Chứa gì?**

#### **1. GradientHeadline/**
```
GradientHeadline/
├── GradientHeadline.tsx    # Component render headline với gradient
└── index.ts                # Export component
```

**File `GradientHeadline.tsx` làm gì?**
- Render text headline với một số từ có gradient màu
- Ví dụ: "Love **Your Business** Again" → "Love" và "Again" có gradient
- Props: `text`, `gradientWords`, `solidColor`, `size`, `align`

**File `index.ts` làm gì?**
- Export component để import dễ hơn
- Thay vì: `import { GradientHeadline } from '@/components/common/GradientHeadline/GradientHeadline'`
- Dùng: `import { GradientHeadline } from '@/components/common/GradientHeadline'`

#### **2. Badge/**
```
Badge/
├── Badge.tsx              # Component hiển thị badge với icon
└── index.ts
```

**File `Badge.tsx` làm gì?**
- Render một badge nhỏ (ví dụ: "Built by a Salon Owner's Husband")
- Có thể có icon bên trái
- Props: `text`, `icon`, `iconColor`

#### **3. Description/**
```
Description/
├── Description.tsx        # Component hiển thị đoạn mô tả
└── index.ts
```

**File `Description.tsx` làm gì?**
- Render đoạn text mô tả (description)
- Có style nhất quán (font size, line height, color)
- Props: `text`, `maxWidth`, `className`

#### **4. Button/**
```
Button/
├── Button.tsx            # Component button tái sử dụng
└── index.ts
```

**File `Button.tsx` làm gì?**
- Render button với các variant (primary, secondary)
- Có thể có icon
- Props: `variant`, `children`, `icon`, `onClick`

#### **5. Container/**
```
Container/
├── Container.tsx         # Component wrapper với max-width và padding
└── index.ts
```

**File `Container.tsx` làm gì?**
- Wrapper component để **căn giữa nội dung** và giới hạn chiều rộng
- Đảm bảo tất cả sections có cùng `max-width` và `padding`
- Props: `children`, `className`, `as` (div, section, nav, ...)

**Ví dụ:**
```tsx
<Container>
  <h1>Content</h1>  {/* Tự động căn giữa, max-width: 1168px, padding: 24px */}
</Container>
```

---

## 📂 src/components/layout/ - Layout Components

### **Tại sao cần?**
- Chứa components **layout** (Header, Footer)
- Các components này xuất hiện trên **mọi page**
- Tách riêng để dễ maintain và reuse

### **Chứa gì?**

#### **1. Header/**
```
Header/
├── Header.tsx            # Component header (navigation bar)
└── index.ts
```

**File `Header.tsx` làm gì?**
- Render navigation bar ở đầu trang
- Chứa: Logo, menu items, language switcher, mobile menu
- Fixed position (luôn ở trên cùng khi scroll)
- Có animation khi load (Framer Motion)

**Code mẫu:**
```tsx
export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}  // Bắt đầu từ trên
      animate={{ y: 0, opacity: 1 }}     // Di chuyển xuống
    >
      <Container>
        <img src="/images/logo.svg" />
        <nav>...</nav>
      </Container>
    </motion.header>
  );
};
```

#### **2. Footer/**
```
Footer/
├── Footer.tsx            # Component footer
└── index.ts
```

**File `Footer.tsx` làm gì?**
- Render footer ở cuối trang
- Chứa: Links, copyright, social media icons

---

## 📂 src/components/sections/ - Section Components

### **Tại sao cần?**
- Chứa components cho **từng section** của page
- Mỗi section là một phần lớn của page (Hero, Stats, Demo, CTA)

### **Chứa gì?**

#### **1. HeroSection/**
```
HeroSection/
├── HeroSectionHome.tsx        # Hero section cho Home page
├── HeroSectionSolutions.tsx   # Hero section cho Solutions page
├── HeroSection.old.tsx        # Backup file (KHÔNG XÓA)
└── index.ts                   # Export cả 2 components
```

**Tại sao có nhiều file HeroSection?**
- Mỗi page có **style hero section khác nhau**
- Home page: Background image, stat cards
- Solutions page: Dark background, centered content
- **Hybrid Approach**: Dùng shared components (GradientHeadline, Badge) nhưng layout riêng

**File `HeroSectionHome.tsx` làm gì?**
- Render hero section cho trang Home
- Có: Badge, Headline với gradient, Description, CTA buttons, Stat cards overlay
- Background image với gradient overlay
- Dùng shared components: `GradientHeadline`, `Badge`, `Description`, `Container`

**File `HeroSectionSolutions.tsx` làm gì?**
- Render hero section cho trang Solutions
- Layout khác: Dark background, centered content
- Cũng dùng shared components nhưng style khác

**File `index.ts` làm gì?**
```tsx
export { HeroSectionHome } from './HeroSectionHome';
export { HeroSectionSolutions } from './HeroSectionSolutions';
```
- Export cả 2 components để import dễ:
  ```tsx
  import { HeroSectionHome } from '@/components/sections/HeroSection';
  ```

#### **2. StatsSection/**
```
StatsSection/
├── StatsSection.tsx      # Component hiển thị statistics
└── index.ts
```

**File `StatsSection.tsx` làm gì?**
- Render section hiển thị các số liệu thống kê
- Ví dụ: "10,000+ Customers", "500+ Salons"

#### **3. DemoSection/**
```
DemoSection/
├── DemoSection.tsx       # Component hiển thị demo video/image
└── index.ts
```

**File `DemoSection.tsx` làm gì?**
- Render section hiển thị demo (video hoặc screenshots)
- Có thể có video player hoặc image carousel

#### **4. CTASection/**
```
CTASection/
├── CTASection.tsx        # Component Call-to-Action section
└── index.ts
```

**File `CTASection.tsx` làm gì?**
- Render section kêu gọi hành động (Call-to-Action)
- Ví dụ: "Start your free trial", "Contact us"

---

## 📂 src/pages/ - Page Components

### **Tại sao cần?**
- Chứa components **đại diện cho một page hoàn chỉnh**
- Mỗi file = 1 page
- Kết hợp các sections lại với nhau

### **Chứa gì?**

#### **HomePage.tsx**
```
pages/
└── HomePage.tsx          # Component cho trang Home
```

**File `HomePage.tsx` làm gì?**
- Render **toàn bộ trang Home**
- Kết hợp: Header, HeroSection, StatsSection, DemoSection, CTASection, Footer
- Đây là **entry point** của trang Home

**Code mẫu:**
```tsx
export const HomePage = () => {
  return (
    <>
      <Header />                    {/* Navigation bar */}
      <main>
        <HeroSectionHome />         {/* Hero section */}
        <StatsSection />            {/* Statistics */}
        <DemoSection />             {/* Demo */}
        <CTASection />              {/* Call-to-Action */}
      </main>
      <Footer />                    {/* Footer */}
    </>
  );
};
```

---

## 📂 src/i18n/ - Internationalization

### **Tại sao cần?**
- Hỗ trợ **đa ngôn ngữ** (tiếng Việt, tiếng Anh)
- Tách text ra khỏi code để dễ translate
- Dùng thư viện `react-i18next`

### **Chứa gì?**

#### **1. config.ts**
```
i18n/
├── config.ts            # Config cho react-i18next
```

**File `config.ts` làm gì?**
- Cấu hình `react-i18next`
- Định nghĩa: Ngôn ngữ mặc định, fallback language, nơi load translations
- Ví dụ:
  ```ts
  export const i18nConfig = {
    lng: 'vi',              // Ngôn ngữ mặc định
    fallbackLng: 'en',      // Ngôn ngữ dự phòng
    resources: {
      vi: { common: viTranslations },
      en: { common: enTranslations },
    },
  };
  ```

#### **2. index.ts**
```
i18n/
├── index.ts             # Export i18n instance
```

**File `index.ts` làm gì?**
- Khởi tạo và export `i18n` instance
- Import vào `main.tsx` để sử dụng trong toàn app

#### **3. locales/ - Translations**
```
locales/
├── vi/
│   └── common.json      # Translations tiếng Việt
└── en/
    └── common.json      # Translations tiếng Anh
```

**File `common.json` làm gì?**
- Chứa **tất cả text** của ứng dụng dưới dạng key-value
- Ví dụ:
  ```json
  {
    "hero": {
      "label": "Built by a Salon Owner's Husband",
      "headlineLove": "Love",
      "headlineBusiness": "Your Business",
      "description": "Transform your salon..."
    }
  }
  ```

**Cách dùng:**
```tsx
const { t } = useTranslation();
<h1>{t('hero.headlineLove')}</h1>  // "Love"
```

---

## 📂 src/styles/ - Global Styles

### **Tại sao cần?**
- Chứa **CSS global** (không phải CSS cho từng component)
- Component dùng Tailwind, không có CSS file riêng
- Chỉ có CSS cho: Reset, Base styles, Variables, Utilities

### **Chứa gì?**

#### **1. variables.css**
```
styles/
├── variables.css        # CSS Variables (Design System)
```

**File `variables.css` làm gì?**
- Định nghĩa **Design System** bằng CSS Variables
- Chứa: Colors, fonts, spacing, shadows, breakpoints
- Ví dụ:
  ```css
  :root {
    --color-primary: #6366F1;
    --color-accent: #FA6985;
    --font-primary: 'Inter', sans-serif;
    --spacing-sm: 8px;
  }
  ```
- Tailwind config đọc các variables này và map thành Tailwind classes

**Tại sao cần?**
- **Single source of truth** cho design system
- Thay đổi 1 chỗ → toàn bộ app thay đổi
- Dễ maintain, consistent

#### **2. reset.css**
```
styles/
├── reset.css           # CSS Reset
```

**File `reset.css` làm gì?**
- Reset các style mặc định của browser
- Đảm bảo **consistent** trên mọi browser
- Ví dụ: Reset margin, padding, list-style, ...

#### **3. base.css**
```
styles/
├── base.css            # Base styles
```

**File `base.css` làm gì?**
- Định nghĩa **base styles** cho HTML elements
- Ví dụ: `body`, `h1`, `h2`, `p`, `a`, ...
- Set font-family, line-height, color mặc định

#### **4. utilities.css**
```
styles/
├── utilities.css      # Utility classes
```

**File `utilities.css` làm gì?**
- Định nghĩa các **utility classes** custom (không có trong Tailwind)
- Ví dụ: `.container` (deprecated, dùng Container component thay thế)

---

## 📂 src/types/ - TypeScript Types

### **Tại sao cần?**
- Chứa **TypeScript types/interfaces** được dùng ở nhiều nơi
- Giúp type-safe, dễ maintain

### **Chứa gì?**

#### **index.ts**
```
types/
└── index.ts           # Export tất cả types
```

**File `index.ts` làm gì?**
- Export các interfaces/types
- Ví dụ:
  ```ts
  export interface ButtonProps {
    variant?: 'filled' | 'outline';
    children: React.ReactNode;
  }
  ```
- Các component import từ đây:
  ```tsx
  import type { ButtonProps } from '@/types';
  ```

---

## 📄 src/main.tsx - Entry Point

### **File này làm gì?**
- **Entry point** của ứng dụng
- Khởi tạo React app, mount vào DOM
- Import CSS global, i18n config

**Code mẫu:**
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';        // Import global CSS
import './i18n';             // Init i18n

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📄 src/App.tsx - Root Component

### **File này làm gì?**
- **Root component** của ứng dụng
- Chứa routing logic (nếu có)
- Render page tương ứng

**Code mẫu:**
```tsx
import { HomePage } from './pages/HomePage';

function App() {
  return <HomePage />;
}

export default App;
```

---

## 📄 src/index.css - Main CSS Entry

### **File này làm gì?**
- Import **tất cả CSS** cần thiết
- Import Tailwind directives
- Import global styles

**Code mẫu:**
```css
@tailwind base;           /* Tailwind base styles */
@tailwind components;    /* Tailwind component classes */
@tailwind utilities;      /* Tailwind utility classes */

@import './styles/variables.css';  /* Design system */
@import './styles/reset.css';      /* CSS reset */
@import './styles/base.css';       /* Base styles */
@import './styles/utilities.css';  /* Utility classes */
```

---

## 📄 Root Files

### **package.json**
- Định nghĩa **dependencies** (React, Tailwind, Framer Motion, ...)
- Định nghĩa **scripts** (dev, build, preview)
- Metadata của project

### **tailwind.config.js**
- Cấu hình **Tailwind CSS**
- Map CSS Variables thành Tailwind classes
- Định nghĩa custom colors, fonts, spacing

### **vite.config.ts**
- Cấu hình **Vite** build tool
- Định nghĩa path aliases (`@/` → `src/`)
- Config plugins

### **tsconfig.json**
- Cấu hình **TypeScript**
- Định nghĩa path aliases
- Compiler options

---

## ✅ Tóm Tắt

| Thư Mục/File | Mục Đích | Chứa Gì |
|--------------|----------|---------|
| `public/` | Files tĩnh | Images, favicon |
| `src/components/common/` | Shared components | GradientHeadline, Badge, Description, Button, Container |
| `src/components/layout/` | Layout components | Header, Footer |
| `src/components/sections/` | Section components | HeroSection, StatsSection, DemoSection, CTASection |
| `src/pages/` | Page components | HomePage |
| `src/i18n/` | Internationalization | Config, translations (vi, en) |
| `src/styles/` | Global CSS | Variables, reset, base, utilities |
| `src/types/` | TypeScript types | Shared interfaces |
| `src/main.tsx` | Entry point | Khởi tạo React app |
| `src/App.tsx` | Root component | Routing logic |
| `src/index.css` | Main CSS | Import tất cả CSS |

---

## 💡 Lưu Ý

1. **KHÔNG tạo CSS file riêng** cho component → Dùng Tailwind
2. **Dùng shared components** khi có thể → Tránh duplicate
3. **Mỗi hero section là file riêng** → Hybrid approach
4. **Tất cả text dùng translations** → Không hardcode
5. **Export từ `index.ts`** → Import dễ hơn

---

## 📚 Tham Khảo

- **Coding Rules**: [`CODING_RULES.md`](./CODING_RULES.md)
- **Hero Section Guide**: [`HERO_SECTION_GUIDE.md`](./HERO_SECTION_GUIDE.md)
- **Architecture**: [`../ARCHITECTURE.md`](../ARCHITECTURE.md)

