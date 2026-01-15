"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Header Section */}
      <section className="bg-[#FAF9F6] py-10 md:py-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-800/80 block mb-6">
              Về Chúng Tôi
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-stone-800 mb-8 leading-tight">
              Small Gem, <br />
              <span className="italic font-light text-emerald-900">True Beauty.</span>
            </h1>
            <div className="w-16 h-[1px] bg-emerald-800 mx-auto opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-20">
        <div className="max-w-5xl mx-auto">
          {/* Section 1: Philosophy */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] relative z-10 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1200"
                  alt="Crafting Jade"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-8 -left-8 w-full h-full border border-stone-200 -z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl text-stone-800 leading-snug">
                Nơi ngọc thô được đánh thức <br /> bởi đôi tay <span className="italic font-light">tâm huyết.</span>
              </h2>
              <div className="space-y-4 text-stone-500 font-light leading-relaxed text-lg">
                <p>
                  Tiệm Ngọc Nhỏ ra đời từ niềm đam mê sâu sắc với vẻ đẹp vĩnh cửu của đá quý tự nhiên. Chúng tôi tin rằng mỗi viên ngọc là một món quà từ lòng đất, mang trong mình tần số bình an.
                </p>
                <p>
                  Tại đây, chúng tôi không chỉ bán trang sức. Chúng tôi trao gửi những "người bạn đồng hành" giúp tôn vinh khí chất thanh cao và sự tĩnh lặng trong tâm hồn mỗi người phụ nữ.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Values (The Grid) */}
          <div className="bg-[#FAF9F6] p-12 md:p-20 mb-32">
            <div className="text-center mb-16">
              <h3 className="font-serif text-3xl text-stone-800">Giá trị cốt lõi</h3>
              <p className="text-stone-400 text-sm mt-2 uppercase tracking-widest">Triết lý vận hành của Tiệm</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Chất lượng",
                  desc: "Cam kết ngọc tự nhiên 100%, mỗi sản phẩm đều kèm giấy kiểm định uy tín."
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Tinh tế",
                  desc: "Thiết kế tối giản, tôn vinh nguyên bản chất liệu hơn là sự phô trương hào nhoáng."
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Tận tâm",
                  desc: "Mỗi khách hàng là một người bạn. Chúng tôi tư vấn dựa trên sự phù hợp và năng lượng."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-emerald-800 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-xl text-stone-800">{item.title}</h4>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 3: Closing Quote */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-2xl mx-auto border-t border-stone-100 pt-20"
          >
            <p className="font-serif text-2xl md:text-3xl italic text-stone-400 leading-relaxed">
              "Ngọc quý không ở kích thước, mà ở chiều sâu của sự tĩnh tại mà nó mang lại cho chủ nhân."
            </p>
            <p className="mt-8 text-xs font-bold tracking-[0.4em] uppercase text-emerald-800">
              — Tiệm Ngọc Nhỏ
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}