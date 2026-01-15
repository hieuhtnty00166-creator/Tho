"use client";

import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Eye, Plus } from "lucide-react";
import { useState } from "react";
import { ProductDialog } from "./ProductDialog";
import { motion } from "framer-motion";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <>
      <div className="group relative">
        {/* Image Container */}
        <div 
          className="relative aspect-[4/5] overflow-hidden bg-[#FAF9F6] cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        >
          <Image
            src={product.images[0]}
            alt={product.name_vi}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          
          {/* Badge giảm giá tinh tế */}
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-bold tracking-widest text-emerald-900 uppercase">
              Tuyển chọn
            </div>
          )}

          {/* Overlay Actions - Xuất hiện nhẹ nhàng */}
          <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
            <div className="flex w-full gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addItem(product);
                }}
                className="flex-1 bg-white text-stone-800 h-12 text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-emerald-900 hover:text-white transition-all duration-300 shadow-sm"
              >
                <Plus className="w-3 h-3" /> Thêm vào giỏ
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDialogOpen(true);
                }}
                className="w-12 bg-white text-stone-800 h-12 flex items-center justify-center hover:bg-stone-100 transition-all shadow-sm"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-6 space-y-2 text-center">
          <p className="text-[10px] text-emerald-800/60 font-bold uppercase tracking-[0.2em]">
            {product.material}
          </p>
          <h3 
            className="font-serif text-xl text-stone-800 cursor-pointer hover:text-emerald-900 transition-colors"
            onClick={() => setIsDialogOpen(true)}
          >
            {product.name_vi}
          </h3>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-light text-stone-900 tracking-wide">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through font-light italic">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      <ProductDialog 
        product={product} 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </>
  );
}