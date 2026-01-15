"use client";

import { motion } from "framer-motion";
import { mockNews } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";

export function LatestInsights() {
  // Lấy 4 bài viết (giả sử mockNews có đủ hoặc lấy thêm từ data)
  const posts = mockNews.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-800/80">
              Góc Chia Sẻ
            </span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">
            Kiến Thức & <span className="italic font-light">Cảm Hứng</span>
          </h2>
          <div className="w-12 h-[2px] bg-emerald-800 mx-auto opacity-30"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/news/${post.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
                  <Image
                    src={post.image}
                    alt={post.title_vi}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                  
                  {/* Floating Date Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-emerald-800" />
                    <span className="text-[10px] font-medium tracking-wider text-stone-600 uppercase">
                      {post.publishedAt}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-stone-800 leading-snug group-hover:text-emerald-900 transition-colors">
                    {post.title_vi}
                  </h3>
                  <p className="text-stone-500 text-sm font-light line-clamp-2 leading-relaxed">
                    {post.excerpt_vi}
                  </p>
                  
                  <div className="pt-2 flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 group-hover:text-emerald-800 transition-colors">
                    Đọc chi tiết <ArrowUpRight className="ml-1 w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <Button asChild variant="outline" className="rounded-none border-stone-200 px-12 h-14 hover:border-emerald-800 hover:bg-transparent transition-all">
            <Link href="/news" className="text-xs tracking-[0.2em] font-medium">
              XEM TẤT CẢ BÀI VIẾT
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}