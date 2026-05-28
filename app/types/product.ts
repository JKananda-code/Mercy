// types/product.ts
export type ProductCategory = 'makeup' | 'skincare' | 'hair' | 'fragrance' | 'accessories';

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  brand?: string;
  images: string[];
  inStock: boolean;
  tags?: string[];
  variants?: {
    name: string; // e.g. "Shade"
    options: string[]; // e.g. ["Caramel", "Mocha"]
  }[];
};
