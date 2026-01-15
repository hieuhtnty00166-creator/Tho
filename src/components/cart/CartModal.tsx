"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useRouter } from "next/navigation";

export function CartModal() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-none bg-white shadow-2xl">
        {/* Header - Minimalist Style */}
        <SheetHeader className="p-8 border-b border-stone-50">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-emerald-800" />
            <SheetTitle className="font-serif text-2xl text-stone-800 font-light">
              Túi Hàng Của Bạn
            </SheetTitle>
          </div>
          <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] text-left">
            {items.length} Tuyệt tác đã chọn
          </p>
        </SheetHeader>
        
        {/* Content Area */}
        <ScrollArea className="flex-1 px-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-stone-300" />
              </div>
              <p className="font-serif text-stone-400 italic">Chưa có món bảo vật nào được chọn...</p>
              <Button 
                variant="link" 
                onClick={() => setIsOpen(false)}
                className="text-emerald-800 text-[10px] tracking-widest uppercase font-bold"
              >
                Tiếp tục khám phá
              </Button>
            </div>
          ) : (
            <div className="py-8 space-y-8">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-6 group animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Product Image */}
                  <div className="relative h-24 w-20 bg-stone-100 overflow-hidden shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name_vi}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <h4 className="font-serif text-base text-stone-800 line-clamp-1">
                        {item.product.name_vi}
                      </h4>
                      <p className="text-xs text-stone-400 tracking-wider">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls - Clean Style */}
                      <div className="flex items-center border border-stone-100 bg-[#FAF9F6]">
                        <button
                          className="h-8 w-8 flex items-center justify-center text-stone-400 hover:text-stone-800 transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-[11px] w-6 text-center font-medium text-stone-700">
                          {item.quantity}
                        </span>
                        <button
                          className="h-8 w-8 flex items-center justify-center text-stone-400 hover:text-stone-800 transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        className="text-stone-300 hover:text-red-800 transition-colors"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {/* Footer - Order Summary */}
        {items.length > 0 && (
          <div className="p-8 bg-[#FAF9F6] space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 uppercase tracking-widest">
                <span>Tạm tính</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex items-center justify-between font-serif text-xl text-stone-800 pt-2 border-t border-stone-200/50">
                <span>Tổng cộng</span>
                <span className="text-emerald-900 font-sans font-medium">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full bg-emerald-900 hover:bg-emerald-950 text-white rounded-none h-14 tracking-[0.2em] font-bold text-xs transition-all shadow-lg hover:shadow-emerald-900/20"
                size="lg"
                onClick={handleCheckout}
              >
                TIẾN HÀNH THANH TOÁN
              </Button>
              <p className="text-[9px] text-center text-stone-400 tracking-widest leading-relaxed">
                Miễn phí vận chuyển cho đơn hàng trang sức ngọc cao cấp
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}