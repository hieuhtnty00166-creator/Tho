"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Hiệu ứng đổi màu khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tự động focus vào ô input khi mở search
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-stone-100 py-2 shadow-sm" 
          : "bg-[#FAF9F6] border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex h-14 items-center justify-between relative">
        {/* Left: Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-stone-800">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#FAF9F6] border-none p-8">
              <SheetTitle className="font-serif text-2xl mb-8 border-b border-stone-200 pb-4">
                Danh Mục
              </SheetTitle>
              <nav className="flex flex-col gap-6">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm tracking-[0.2em] uppercase transition-colors hover:text-emerald-800",
                      pathname === item.href ? "text-emerald-900 font-bold" : "text-stone-500 font-light"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Center: Logo (Desktop: Left) */}
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-stone-200 bg-white">
              <Image
                src="/logo.png"
                alt="Tiệm Ngọc Nhỏ Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl md:text-2xl tracking-tight text-stone-800 transition-colors group-hover:text-emerald-900 hidden sm:block">
              Tiệm Ngọc Nhỏ<span className="text-emerald-800">.</span>
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-all hover:text-emerald-800 relative py-2 group",
                  pathname === item.href ? "text-emerald-900 font-bold" : "text-stone-400 font-medium"
                )}
              >
                {item.title}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-emerald-800 transition-transform duration-300 origin-left",
                  pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center relative">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onSubmit={handleSearch}
                  className="overflow-hidden"
                >
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Tìm sản phẩm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 w-full rounded-none border-0 border-b border-stone-200 focus-visible:ring-0 bg-transparent px-2 text-sm placeholder:text-stone-300"
                  />
                </motion.form>
              )}
            </AnimatePresence>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-stone-600 hover:text-emerald-800 shrink-0"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-stone-800 hover:bg-transparent"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 flex items-center justify-center rounded-full bg-emerald-900 text-white text-[9px] font-bold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}