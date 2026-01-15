export interface Product {
  id: string;
  name: string;
  name_vi: string;
  description: string;
  description_vi: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  material: string;
  color: string;
  size: string;
  inStock: boolean;
  featured: boolean;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  title_vi: string;
  excerpt: string;
  excerpt_vi: string;
  content: string;
  content_vi: string;
  image: string;
  author: string;
  publishedAt: string;
  slug: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
