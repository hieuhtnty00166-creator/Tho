"use client";

import { use } from "react";
import { mockNews } from "@/data/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const article = mockNews.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-24">
      {/* Progress Bar Decor */}
      <div className="fixed top-[64px] left-0 w-full h-[1px] bg-stone-100 z-40">
        <motion.div 
          className="h-full bg-emerald-800 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Hero Header Section */}
      <header className="py-10 md:pb-16 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link 
              href="/news" 
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 hover:text-emerald-800 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Trở lại Journal
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center gap-6 text-[11px] tracking-widest uppercase text-emerald-800 font-medium">
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 opacity-60" />
                  {article.publishedAt}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 opacity-60" />
                  {article.author}
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-stone-800 leading-[1.15]">
                {article.title_vi}
              </h1>

              <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed italic border-l-2 border-emerald-800/20 pl-8 py-2">
                &ldquo;{article.excerpt_vi}&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Featured Image Section */}
      <section className="container mx-auto px-6 -mt-10 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/8] max-w-6xl mx-auto shadow-2xl overflow-hidden"
        >
          <Image
            src={article.image}
            alt={article.title_vi}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Article Body */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-stone lg:prose-xl prose-p:font-light prose-p:leading-loose prose-p:text-stone-600 prose-headings:font-serif prose-headings:text-stone-800 prose-strong:text-emerald-900 prose-img:rounded-none">
            {/* Giả lập nội dung chi tiết bài viết */}
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-emerald-900">
              {article.content_vi}
            </p>
            
            <p>
              Ngọc từ lâu đã được coi là tinh hoa của đất trời, mang lại sự bình an và cân bằng cho người sở hữu. 
              Tại Tiệm Ngọc Nhỏ, mỗi viên ngọc được tuyển chọn đều phải trải qua quy trình kiểm định khắt khe về 
              độ trong, sắc thái màu và năng lượng tự nhiên.
            </p>

            <blockquote className="border-emerald-800/30 bg-[#FAF9F6] p-8 italic font-serif text-2xl text-stone-500">
              &ldquo;Ngọc quý không chỉ nằm ở giá trị vật chất, mà ở sự kết nối tâm hồn giữa đá và người đeo.&rdquo;
            </blockquote>

            <h3>Cách bảo quản ngọc để luôn sáng bóng</h3>
            <p>
              Để ngọc luôn giữ được vẻ đẹp nguyên bản, bạn nên tránh tiếp xúc trực tiếp với hóa chất mạnh 
              và thường xuyên làm sạch bằng khăn mềm ẩm. Việc đeo ngọc thường xuyên cũng là một cách để 
              &ldquo;nuôi&rdquo; ngọc bằng chính hơi ấm và năng lượng của cơ thể.
            </p>
          </div>

          {/* Footer of Article */}
          <div className="mt-20 pt-10 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-stone-400">Chia sẻ:</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-emerald-800">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <span className="bg-stone-100 px-3 py-1 text-[10px] tracking-widest uppercase text-stone-500">#NgocCamThach</span>
              <span className="bg-stone-100 px-3 py-1 text-[10px] tracking-widest uppercase text-stone-500">#PhongThuy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Post Suggestion */}
      <section className="bg-[#FAF9F6] mt-32 py-24">
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-serif text-2xl text-stone-800 mb-12">Bài viết bạn có thể quan tâm</h4>
          {/* Ở đây có thể render thêm 2-3 ProductCard hoặc NewsCard khác */}
          <Button asChild variant="outline" className="rounded-none border-stone-300 tracking-widest text-xs h-12 px-10">
            <Link href="/news">XEM TẤT CẢ BÀI VIẾT</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}