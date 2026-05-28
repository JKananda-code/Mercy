// data/products.ts
import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'velvet-matte-lipstick-rose',
    name: 'Velvet Matte Lipstick - Rose',
    description: 'Long-lasting matte lipstick with a soft, velvety finish.',
    price: 1200,
    category: 'makeup',
    brand: 'Mercy Signature',
    images: ['/images/products/lipstick-rose.jpg'],
    inStock: true,
    tags: ['lipstick', 'matte', 'rose'],
  },
  // add more...
];
