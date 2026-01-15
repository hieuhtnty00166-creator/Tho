"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden"> 
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/60 block mb-6">
              Liên Hệ Với Chúng Tôi
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-black leading-tight mb-8">
              Kết nối với <br />
              <span className="italic font-light text-emerald-800">Tiệm Ngọc Nhỏ.</span>
            </h1>
            <p className="text-black/70 font-light leading-relaxed max-w-2xl mx-auto text-lg">
              Mỗi món đồ trang sức tại Tiệm Ngọc Nhỏ không chỉ là vật phẩm, mà còn là tâm hồn và năng lượng. Hãy liên hệ để được tư vấn món quà ý nghĩa nhất cho bản thân và người thương.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                    <MapPin className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Địa chỉ cửa hàng</h4>
                    <p className="text-stone-800 font-medium text-lg leading-relaxed">
                      123 Đường Ngọc Bích, Quận 1,<br />
                      Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                    <Phone className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Số điện thoại</h4>
                    <p className="text-stone-800 font-medium text-lg">0901 234 567</p>
                    <p className="text-stone-500 text-sm font-light mt-1">Hỗ trợ tư vấn 24/7</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                    <Mail className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Email</h4>
                    <p className="text-stone-800 font-medium text-lg">hello@tiemngocnho.vn</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-stone-100">
                    <Clock className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Giờ mở cửa</h4>
                    <p className="text-stone-800 font-medium text-lg">Thứ 2 - Chủ Nhật</p>
                    <p className="text-stone-500 text-sm font-light mt-1">09:00 - 21:00 hàng ngày</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">Theo dõi chúng tôi</h4>
                <div className="flex items-center gap-6">
                  <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-emerald-800 hover:border-emerald-800 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-emerald-800 hover:border-emerald-800 transition-all">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100"
              >
                <div className="mb-12">
                  <h3 className="font-serif text-3xl text-stone-800 mb-4">Gửi tin nhắn cho chúng tôi</h3>
                  <p className="text-stone-500 font-light">Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 24 giờ làm việc.</p>
                </div>

                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Họ và tên</label>
                      <Input 
                        placeholder="Nguyễn Văn A" 
                        className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0 text-stone-800 py-6"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Số điện thoại</label>
                      <Input 
                        placeholder="0901 234 567" 
                        className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0 text-stone-800 py-6"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Địa chỉ Email</label>
                    <Input 
                      type="email"
                      placeholder="email@example.com" 
                      className="rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus-visible:ring-0 text-stone-800 py-6"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Lời nhắn hoặc yêu cầu tư vấn</label>
                    <textarea 
                      placeholder="Hãy cho chúng tôi biết bạn đang quan tâm đến sản phẩm nào..."
                      className="w-full min-h-[150px] rounded-none border-0 border-b border-stone-200 focus:border-emerald-800 bg-transparent px-0 transition-all focus:outline-none text-stone-800 py-4 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-[#122620] hover:bg-emerald-900 text-white rounded-none h-16 tracking-[0.2em] font-bold text-xs transition-all shadow-xl hover:shadow-emerald-900/20">
                    GỬI YÊU CẦU NGAY
                  </Button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section> 
    </div>
  );
}
