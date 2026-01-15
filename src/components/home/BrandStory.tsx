"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Cột trái: Hình ảnh nghệ thuật với hiệu ứng trôi */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              style={{ y }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1200&auto=format&fit=crop"
                alt="Chế tác ngọc thủ công"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Khung trang trí phía sau */}
            <div className="absolute top-12 -right-4 lg:right-12 w-full aspect-[4/5] border border-stone-200 -z-0 translate-x-8 translate-y-8" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-4 lg:left-0 bg-emerald-900 text-white p-8 hidden md:block z-20"
            >
              <p className="font-serif text-3xl italic">“</p>
              <p className="text-sm leading-relaxed font-light italic max-w-[200px]">
                Ngọc không chỉ là trang sức, ngọc là tâm hồn của đá và sự tĩnh tại của người đeo.
              </p>
            </motion.div>
          </div>

          {/* Cột phải: Nội dung câu chuyện */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-800/80 block mb-6">
                Câu Chuyện Thương Hiệu
              </span>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-tight mb-8">
                Hành trình tìm lại <br />
                <span className="italic font-light text-emerald-900">Vẻ đẹp nguyên bản.</span>
              </h2>

              <div className="space-y-6 text-stone-600 font-light leading-loose text-lg">
                <p>
                  Tại <strong>Tiệm Ngọc Nhỏ</strong>, chúng tôi tin rằng mỗi viên ngọc đều mang trong mình một năng lượng riêng biệt, được tôi luyện qua hàng triệu năm dưới lòng đất mẹ.
                </p>
                <p>
                  Không chạy theo những xu hướng công nghiệp nhanh chóng, chúng tôi chọn đi chậm lại, tỉ mỉ trong từng khâu tuyển chọn đá thô và chế tác thủ công để giữ trọn vẹn "cái thần" của ngọc.
                </p>
              </div>

              <div className="pt-10 flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-stone-800">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">Năm kinh nghiệm</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-stone-800">5k+</span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">Khách hàng tin yêu</span>
                </div>
              </div>

              <div className="pt-12">
                <Button asChild variant="link" className="p-0 text-stone-800 hover:text-emerald-800 transition-colors group">
                  <Link href="/about" className="flex items-center gap-4 text-xs tracking-[0.3em] font-bold uppercase">
                    Tìm hiểu thêm về chúng tôi
                    <span className="w-12 h-[1px] bg-stone-300 group-hover:bg-emerald-800 group-hover:w-16 transition-all" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/4 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[250px] font-serif font-bold">Small Gem</h2>
      </div>
    </section>
  );
}