"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white flex items-center">
      {/* Background Layer - Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
        <div className="absolute inset-0 -left-32 bg-gradient-to-l from-transparent via-white/50 to-white z-10" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-full w-full"
        >
          <Image 
             src="https://mandalay.com.vn/wp-content/uploads/2023/06/v%C3%B2ng-ng%E1%BB%8Dc-b%C3%ADch.jpg" 
             alt="Jade Bracelet Detail"
             fill
             className="object-cover"
             priority
          />
        </motion.div>
      </div>

      <div className="container relative z-20 px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl bg-white/80 backdrop-blur-sm lg:bg-transparent p-8 lg:p-0"
        >
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-emerald-800"></span>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-800/80">
              Tiệm Ngọc Nhỏ • Tinh Hoa Phương Đông
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-800 leading-[1.1] mb-8">
            Chạm vào <br />
            <span className="italic text-emerald-900">Sự Tĩnh Tại.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed font-light">
            Mỗi chiếc vòng ngọc là một câu chuyện của thời gian, mang đến bình an và vẻ đẹp vĩnh cửu cho người sở hữu.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-emerald-900 hover:bg-emerald-950 text-white rounded-none px-10 h-14 transition-all">
              <Link href="/products" className="flex items-center gap-2 text-sm tracking-widest">
                BST VÒNG NGỌC <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-none border-stone-300 px-10 h-14 hover:bg-stone-50 transition-all text-sm tracking-widest">
              <Link href="/about">VỀ CHÚNG TÔI</Link>
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">
            <div>
              <p className="text-2xl font-serif text-emerald-900">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-stone-500">Ngọc Tự Nhiên</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-emerald-900">GIA</p>
              <p className="text-[10px] uppercase tracking-wider text-stone-500">Kiểm Định Uy Tín</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-emerald-900">Pro</p>
              <p className="text-[10px] uppercase tracking-wider text-stone-500">Chế Tác Thủ Công</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile/Tablet Image (Visible only when sidebar image is hidden) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:hidden relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image 
             src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=2000" 
             alt="Jade Bracelet"
             fill
             className="object-cover"
          />
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}