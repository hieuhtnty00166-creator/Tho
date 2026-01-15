"use client";

import { Product } from "@/types";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { X, ShoppingBag, Ruler, Palette, Sparkles } from "lucide-react";

interface ProductDialogProps {
  product: Product;
}

export function ProductDialog({ product, open, onOpenChange }: ProductDialogProps & { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { addItem } = useCart();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw]! md:max-w-4xl! p-0 overflow-hidden border-none bg-[#FAF9F6] rounded-none shadow-2xl">
        <div className="sr-only">
          <DialogTitle>{product.name_vi}</DialogTitle>
        </div>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Image Section - Left */}
          <div className="relative w-full md:w-[55%] aspect-square md:aspect-auto bg-stone-100">
            <Image
              src={product.images[0]}
              alt={product.name_vi}
              fill
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-6 left-6 bg-emerald-900 text-white px-4 py-1 text-[10px] tracking-[0.2em] font-bold uppercase">
                Ưu đãi đặc biệt
              </div>
            )}
          </div>

          {/* Info Section - Right */}
          <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between bg-white relative">
            {/* Nội dung chính */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-emerald-800"></span>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-800/80">
                    {product.category}
                  </p>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 leading-tight">
                  {product.name_vi}
                </h2>
                
                <div className="flex items-baseline gap-4">
                  <span className="text-2xl font-light text-stone-900">
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through font-light">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full h-[1px] bg-stone-100" />

              <p className="text-stone-500 font-light leading-relaxed text-sm">
                {product.description_vi}
              </p>

              {/* Thông số kỹ thuật */}
              <div className="grid grid-cols-1 gap-5 pt-2">
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-800/60" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block">Chất liệu</span>
                    <span className="text-stone-700 font-medium">{product.material}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center">
                    <Ruler className="w-4 h-4 text-emerald-800/60" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block">Kích thước</span>
                    <span className="text-stone-700 font-medium">{product.size}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nút thao tác */}
            <div className="mt-12 space-y-4">
              <Button 
                className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-14 transition-all flex items-center gap-3 tracking-[0.2em] font-bold text-xs"
                onClick={() => {
                  addItem(product);
                  onOpenChange(false);
                }}
              >
                <ShoppingBag className="w-4 h-4" />
                THÊM VÀO GIỎ HÀNG
              </Button>
              <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest">
                Giao hàng toàn quốc • Kiểm định uy tín
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}