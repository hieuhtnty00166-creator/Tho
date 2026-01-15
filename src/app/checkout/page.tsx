"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, CheckCircle2, Truck, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập gửi đơn hàng
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 text-center shadow-xl border border-stone-100"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-800" />
          </div>
          <h1 className="font-serif text-3xl text-stone-800 mb-4">Đặt hàng thành công</h1>
          <p className="text-stone-500 font-light leading-relaxed mb-8">
            Cảm ơn quý khách đã tin tưởng Tiệm Ngọc Nhỏ. Chúng tôi sẽ sớm liên hệ để xác nhận đơn hàng của quý khách.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">Tự động quay về trang chủ sau 5 giây</p>
            <Button asChild className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-12 tracking-widest text-xs font-bold">
              <Link href="/">QUAY VỀ TRANG CHỦ</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-6 h-6 text-stone-300" />
        </div>
        <h2 className="font-serif text-2xl text-stone-800 mb-4">Giỏ hàng của bạn đang trống</h2>
        <Button asChild className="bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-12 px-8 tracking-widest text-xs font-bold">
          <Link href="/products">TIẾP TỤC MUA SẮM</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 hover:text-emerald-800 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Trở lại mua sắm
          </Link>
          <h1 className="font-serif text-4xl text-stone-800">Hoàn tất đơn hàng</h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              <section className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                  <UserIcon className="w-4 h-4 text-emerald-800" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-800">Thông tin giao hàng</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Họ và tên</label>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nguyễn Văn A"
                      className="rounded-none border-stone-200 focus:border-emerald-800 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Số điện thoại</label>
                    <Input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0901 234 567"
                      className="rounded-none border-stone-200 focus:border-emerald-800 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Email</label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="rounded-none border-stone-200 focus:border-emerald-800 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Địa chỉ giao hàng</label>
                  <Input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Số nhà, tên đường, quận/huyện, tỉnh/thành"
                    className="rounded-none border-stone-200 focus:border-emerald-800 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Ghi chú (tùy chọn)</label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Lời nhắn cho Tiệm Ngọc Nhỏ..."
                    className="w-full min-h-[100px] p-3 text-sm rounded-none border border-stone-200 focus:outline-none focus:border-emerald-800 transition-colors bg-white"
                  />
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                  <CreditCard className="w-4 h-4 text-emerald-800" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-800">Phương thức thanh toán</h2>
                </div>
                <div className="p-4 border border-emerald-800/20 bg-emerald-50/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full border-4 border-emerald-800 bg-white" />
                    <div>
                      <p className="text-sm font-medium text-stone-800">Thanh toán khi nhận hàng (COD)</p>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Kiểm tra hàng trước khi thanh toán</p>
                    </div>
                  </div>
                  <Truck className="w-5 h-5 text-emerald-800/40" />
                </div>
              </section>

              <Button
                type="submit"
                className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-14 tracking-[0.2em] font-bold text-xs transition-all shadow-lg hover:shadow-emerald-900/20"
              >
                XÁC NHẬN ĐẶT HÀNG • {formatPrice(totalPrice)}
              </Button>
              
              <div className="flex items-center justify-center gap-8 py-4 text-stone-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[9px] uppercase tracking-widest">Bảo mật thông tin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span className="text-[9px] uppercase tracking-widest">Vận chuyển an toàn</span>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-100 p-8 lg:sticky lg:top-32">
              <h2 className="font-serif text-xl text-stone-800 mb-8 pb-4 border-b border-stone-50">Tóm tắt đơn hàng</h2>
              <ScrollArea className="max-h-[400px] -mx-4 px-4 mb-8">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="relative h-16 w-14 bg-stone-100 overflow-hidden shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name_vi}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-800 text-white text-[10px] flex items-center justify-center rounded-full">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-sm text-stone-800 font-medium line-clamp-1">{item.product.name_vi}</h4>
                        <p className="text-xs text-stone-400 tracking-wider mt-1">{formatPrice(item.product.price)}</p>
                      </div>
                      <div className="flex items-center text-sm font-medium text-stone-800">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="space-y-4 pt-6 border-t border-stone-100">
                <div className="flex justify-between text-xs text-stone-400 uppercase tracking-widest">
                  <span>Tạm tính</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-400 uppercase tracking-widest">
                  <span>Phí vận chuyển</span>
                  <span className="text-emerald-800 font-bold">MIỄN PHÍ</span>
                </div>
                <Separator className="bg-stone-100" />
                <div className="flex justify-between items-center font-serif text-2xl text-stone-800">
                  <span>Tổng cộng</span>
                  <span className="text-emerald-900 font-sans font-medium">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
