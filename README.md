# Tiệm Ngọc Nhỏ

Website thương mại điện tử chuyên về trang sức ngọc, được thiết kế theo phong cách tối giản (Minimalism) và tinh tế.

## Tính năng

- **Trang chủ**: Banner giới thiệu, sản phẩm nổi bật với hiệu ứng chuyển động.
- **Sản phẩm**: Danh sách sản phẩm với bộ lọc (Danh mục, Màu sắc), xem chi tiết qua Dialog.
- **Giỏ hàng**: Quản lý giỏ hàng (thêm, sửa, xóa) với dữ liệu được lưu trữ local.
- **Tin tức**: Cập nhật bài viết mới nhất về ngọc và phong thủy.
- **Giới thiệu**: Câu chuyện thương hiệu và giá trị cốt lõi.
- **Responsive**: Tối ưu hiển thị trên mọi thiết bị.

## Công nghệ sử dụng

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn/UI
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun

## Hướng dẫn cài đặt và chạy

1. **Cài đặt dependencies**:
   ```bash
   bun install
   ```

2. **Chạy môi trường phát triển**:
   ```bash
   bun dev
   ```
   Truy cập [http://localhost:3000](http://localhost:3000) để xem website.

3. **Build cho production**:
   ```bash
   bun run build
   bun start
   ```

## Cấu trúc dự án

- `src/app`: Các trang và layout chính.
- `src/components`: Các component giao diện (Header, Footer, ProductCard, CartModal...).
- `src/contexts`: Quản lý state toàn cục (CartContext).
- `src/data`: Dữ liệu mẫu (Mock Data).
- `src/types`: Định nghĩa kiểu dữ liệu TypeScript.
- `src/config`: Cấu hình website (site info, navigation).
