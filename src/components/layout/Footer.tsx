"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#122620] text-stone-300">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-4 group">
                <div className="relative w-16 h-16 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <Image
                    src="/logo.png"
                    alt="Tiệm Ngọc Nhỏ Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-serif text-3xl text-white tracking-tight">
                  Tiệm Ngọc Nhỏ<span className="text-emerald-500">.</span>
                </span>
              </Link>
              <p className="text-sm text-stone-400 font-light leading-relaxed max-w-sm italic">
                &quot;Nơi lưu giữ vẻ đẹp vĩnh cửu của ngọc tự nhiên, mang đến sự tĩnh tại và khí chất thanh cao cho người sở hữu.&quot;
              </p>
            </div>
            
            <div className="flex items-center gap-5">
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">
              Khám Phá
            </h3>
            <ul className="space-y-4 text-sm font-light">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="hover:text-white transition-all hover:translate-x-1 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">
              Liên Hệ
            </h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="leading-relaxed">123 Đường Ngọc Học, Quận 1, <br />Thành phố Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>090 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contact@tiemngocnho.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-widest text-stone-500">
            © {currentYear} TIEM NGOC NHO. TRANG SỨC NGỌC CAO CẤP.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-500">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo hành</Link>
            <Link href="#" className="hover:text-white transition-colors">Kiểm định ngọc</Link>
          </div>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
    </footer>
  );
}