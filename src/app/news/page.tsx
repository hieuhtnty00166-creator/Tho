"use client";

import { mockNews } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#FAF9F6] py-10 md:py-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-800/80 block mb-4">
              Journal & Insights
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6">
              Góc <span className="italic font-light">Tĩnh Tại</span>
            </h1>
            <p className="text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
              Nơi chia sẻ kiến thức về ngọc học, triết lý phong thủy và nghệ thuật sống an nhiên.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {mockNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <Link href={`/news/${article.slug}`} className="block space-y-6">
                {/* Image Container with Hover Effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image
                    src={article.image}
                    alt={article.title_vi}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  {/* Overlay decor */}
                  <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/10 transition-all duration-500" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase text-stone-800 shadow-sm">
                      Kiến thức ngọc
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-3 text-stone-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[11px] tracking-widest uppercase">{article.publishedAt}</span>
                  </div>
                  
                  <h2 className="font-serif text-2xl text-stone-800 leading-snug group-hover:text-emerald-900 transition-colors duration-300">
                    {article.title_vi}
                  </h2>
                  
                  <p className="text-stone-500 text-sm font-light leading-loose line-clamp-3 italic">
                    "{article.excerpt_vi}"
                  </p>

                  <div className="pt-4 flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-stone-800 border-t border-stone-100 mt-6 group-hover:text-emerald-800 transition-all">
                    Đọc bài viết 
                    <ArrowUpRight className="ml-2 w-3 h-3 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / Decorative Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 md:p-20 bg-[#122620] text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="font-serif text-3xl text-white italic">Nhận tin từ Tiệm Ngọc</h3>
            <p className="text-stone-400 font-light text-sm tracking-wide">
              Đăng ký để nhận những chia sẻ sớm nhất về các bộ sưu tập mới và kiến thức chọn ngọc quý.
            </p>
            <div className=" mx-auto max-w-42 flex justify-center gap-0 border-b border-stone-500/50 mt-10">
              <button className="text-white text-[10px] font-bold tracking-[0.3em] uppercase py-4 sm:px-6 hover:text-emerald-900 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
          {/* Decorative background text */}
          <span className="absolute -bottom-10 -right-10 text-white/5 font-serif text-[150px] font-bold select-none pointer-events-none">
            Journal
          </span>
        </motion.div>
      </section>
    </div>
  );
}