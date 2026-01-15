"use client";

import { motion } from "framer-motion";
import { mockProducts } from "@/data/mockData";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  // Lấy 3 sản phẩm nổi bật
  const featured = mockProducts.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-6 h-[1px] bg-emerald-800"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-800/80">
                Tuyển chọn đặc biệt
              </span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
              Kiệt Tác <span className="italic font-light">Vòng Ngọc</span>
            </h2>
            
            <p className="text-stone-500 leading-relaxed font-light text-lg">
              Những thiết kế tinh xảo nhất được lựa chọn để tôn vinh vẻ đẹp tự nhiên và khí chất thanh cao của người phụ nữ Việt.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="link" 
              asChild 
              className="text-stone-800 p-0 h-auto group hidden md:flex items-center gap-3 no-underline hover:no-underline"
            >
              <Link href="/products" className="text-xs tracking-[0.2em] font-semibold uppercase">
                Xem tất cả bộ sưu tập 
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 ml-2 group-hover:bg-stone-800 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Thêm một lớp bọc để tạo hiệu ứng hover đồng nhất nếu ProductCard chưa có */}
              <div className="transition-transform duration-500 group-hover:-translate-y-2">
                <ProductCard product={product} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Action */}
        <div className="mt-16 text-center md:hidden">
          <Button variant="outline" asChild className="w-full rounded-none border-stone-800 h-14 text-xs tracking-widest uppercase">
            <Link href="/products">Khám phá toàn bộ</Link>
          </Button>
        </div>
      </div> 
    </section>
  );
}