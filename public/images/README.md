# Images Directory

Thư mục này chứa các hình ảnh static cho website.

## Cách sử dụng:

### 1. Logo cho Header
- **File name**: `logo.svg` hoặc `logo.png`
- **Path**: `/images/logo.svg` hoặc `/images/logo.png`
- **Kích thước đề xuất**: 187.89px × 40px (theo design)

### 2. Hero Section Background Image
- **File name**: `hero-woman.jpg` hoặc `hero-woman.png`
- **Path**: `/images/hero-woman.jpg`
- **Kích thước đề xuất**: 
  - Desktop: ~800px × 1000px
  - Format: JPG (cho ảnh) hoặc PNG (nếu cần transparency)
  - Optimize: Nên optimize để giảm file size

## Cách thêm images:

1. Copy file ảnh vào thư mục này
2. Đảm bảo tên file đúng:
   - Logo: `logo.svg` hoặc `logo.png`
   - Hero image: `hero-woman.jpg` hoặc `hero-woman.png`
3. Code sẽ tự động load images từ `/images/`

## Lưu ý:

- Vite sẽ tự động serve files từ `/public/` folder
- Path trong code: `/images/filename.jpg` (không cần `/public/`)
- Nếu image không tồn tại, sẽ hiển thị fallback/placeholder

