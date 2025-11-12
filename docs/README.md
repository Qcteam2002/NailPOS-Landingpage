# 📚 Documentation

## 📖 Guides

- **[Cây Thư Mục Chi Tiết](./CAY_THU_MUC_CHI_TIET.md)** - Giải thích chi tiết từng thư mục và file
- **[Hero Section Guide](./HERO_SECTION_GUIDE.md)** - Hướng dẫn tạo hero section mới
- **[Coding Rules](./CODING_RULES.md)** - Rules khi code, cấu trúc source code

---

## 🏗️ Architecture

### **Cấu Trúc Hiện Tại (Hybrid Approach)**

```
src/components/
├── common/                    # Shared components (cross-section)
│   ├── GradientHeadline/     # Dùng cho Hero + Forms
│   ├── Badge/                # Dùng cho Hero
│   └── Description/          # Dùng cho Hero
│
└── sections/HeroSection/
    ├── HeroSectionHome.tsx
    ├── HeroSectionSolutions.tsx
    └── index.ts
```

### **Nguyên Tắc**

1. **Shared Components** - Dùng chung cho nhiều sections
2. **Hero Sections Riêng** - Mỗi page 1 file, dùng shared components
3. **Unique Parts** - Code riêng cho phần đặc biệt

---

## 📝 Notes

- Backup files: `HeroSection.old.tsx` (không xóa)
- Shared components trong `components/common/`
- Mỗi hero section là file riêng, dùng shared components

