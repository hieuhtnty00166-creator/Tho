"use client";

import { useState, useEffect } from "react";
import { mockProducts } from "@/data/mockData";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Search as SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const categories = [
  { id: "All", label: "Tất cả" },
  { id: "bangle", label: "Vòng Bản" },
  { id: "bracelet", label: "Chuỗi Hạt" },
  { id: "necklace", label: "Dây Chuyền" },
  { id: "ring", label: "Nhẫn Ngọc" },
];

const colors = [
  { id: "All", label: "Tất cả màu" },
  { id: "Green", label: "Lục Bảo" },
  { id: "White", label: "Bạch Ngọc" },
  { id: "Purple", label: "Tím Tử La Lan" },
  { id: "Red", label: "Huyết Ngọc" },
];

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Đang tải sản phẩm...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchBarQuery = searchParams.get("search") || "";
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const filteredProducts = mockProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const colorMatch = selectedColor === "All" || product.color === selectedColor;
    const searchMatch = !searchBarQuery || 
      product.name.toLowerCase().includes(searchBarQuery.toLowerCase()) ||
      product.description_vi.toLowerCase().includes(searchBarQuery.toLowerCase());
    return categoryMatch && colorMatch && searchMatch;
  });

  const clearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedColor("All");
    if (searchBarQuery) {
      router.push("/products");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#FAF9F6] py-10 md:py-20 border-b border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-800/80 block mb-4">
              Tuyển tập đá quý
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-stone-800 mb-6">
              Bản Sắc <span className="italic font-light">Ngọc Việt</span>
            </h1>
            <p className="text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
              Khám phá sự giao thoa giữa nghệ thuật chế tác thủ công truyền thống và hơi thở đương đại.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 lg:sticky lg:top-24 lg:self-start space-y-12">
            {/* Category Filter */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Filter className="w-4 h-4 text-emerald-800" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800">Phân loại</h3>
              </div>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-sm text-left transition-all duration-300 flex items-center justify-between group ${
                      selectedCategory === cat.id 
                      ? "text-emerald-900 font-medium translate-x-2" 
                      : "text-stone-400 hover:text-stone-800 hover:translate-x-1"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`w-1.5 h-1.5 rounded-full bg-emerald-800 transition-opacity ${selectedCategory === cat.id ? "opacity-100" : "opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="space-y-6 pt-8 border-t border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800">Sắc ngọc</h3>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`text-sm text-left transition-all duration-300 flex items-center gap-3 ${
                      selectedColor === color.id 
                      ? "text-emerald-900 font-medium translate-x-1" 
                      : "text-stone-400 hover:text-stone-800"
                    }`}
                  >
                    <div className={`w-3 h-3 border border-stone-200 transition-colors ${
                      selectedColor === color.id ? "bg-emerald-800 border-emerald-800" : "bg-transparent"
                    }`} />
                    {color.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== "All" || selectedColor !== "All" || searchBarQuery) && (
              <Button 
                variant="ghost" 
                onClick={clearAllFilters}
                className="text-[10px] tracking-widest uppercase p-0 h-auto text-stone-400 hover:text-emerald-800"
              >
                <X className="w-3 h-3 mr-2" /> Xóa tất cả lọc
              </Button>
            )}
          </aside>

          {/* Main Product Grid */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 pb-6 border-b border-stone-50 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-stone-400 tracking-wider">
                  Hiển thị <span className="text-stone-800 font-medium">{filteredProducts.length}</span> sản phẩm tinh tuyển
                </p>
                {searchBarQuery && (
                  <div className="flex items-center gap-2 text-xs text-emerald-800 font-medium bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
                    <SearchIcon className="w-3 h-3" />
                    Kết quả tìm kiếm cho: &quot;{searchBarQuery}&quot;
                    <button onClick={() => router.push("/products")} className="ml-1 hover:text-emerald-950">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
              {/* Có thể thêm Sort select ở đây */}
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-40 bg-[#FAF9F6]"
              >
                <p className="font-serif text-xl text-stone-400 italic">
                  Không tìm thấy tuyệt tác phù hợp với lựa chọn của bạn.
                </p>
                <Button 
                  variant="link" 
                  onClick={clearAllFilters}
                  className="mt-4 text-emerald-800 uppercase tracking-[0.2em] text-xs font-bold"
                >
                  Xem lại tất cả sản phẩm
                </Button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}