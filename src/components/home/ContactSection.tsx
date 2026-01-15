"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-24 md:py-40 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Cột trái: Thông tin liên hệ */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-800/80 block mb-6">
                Kết Nối Với Chúng Tôi
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-8">
                Ghé thăm không gian <br />
                <span className="italic font-light text-emerald-900">Tĩnh lặng & Sang trọng.</span>
              </h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-md">
                Chúng tôi luôn sẵn lòng lắng nghe và tư vấn để giúp bạn tìm thấy món bảo vật ngọc phù hợp nhất với tâm hồn và phong cách của mình.
              </p>
            </motion.div> 

            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-emerald-800 hover:border-emerald-800 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-emerald-800 hover:border-emerald-800 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cột phải: Form liên hệ */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-2xl relative"
            >
              {/* Trang trí góc */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-stone-100" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-stone-100" />
              
              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Họ và tên</label>
                    <Input 
                      placeholder="Nguyễn Văn A" 
                      className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Số điện thoại</label>
                    <Input 
                      placeholder="0901 234 567" 
                      className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</label>
                  <Input 
                    type="email"
                    placeholder="email@example.com" 
                    className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Lời nhắn của bạn</label>
                  <textarea 
                    placeholder="Tôi muốn tư vấn về vòng ngọc..."
                    className="w-full min-h-[120px] rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus:outline-none text-sm py-2"
                  />
                </div>

                <Button className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-14 tracking-[0.2em] font-bold text-xs transition-all shadow-lg hover:shadow-emerald-900/20">
                  GỬI YÊU CẦU TƯ VẤN
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-white -z-0 opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 border border-stone-100 rounded-full -z-0" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-emerald-800/5 rounded-full -z-0" />
    </section>
  );
}
