// app/shop/page.tsx
import { products } from '@/data/products';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-3xl">Shop cosmetics & beauty</h1>
      <p className="mt-2 text-red-600">
        Curated products for skin, hair, and everyday glam.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.slug}`}
            className="group rounded-2xl border border-pink-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-square w-full rounded-xl bg-pink-50" />
            <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
              {product.brand}
            </p>
            <p className="text-sm font-semibold text-gray-900">{product.name}</p>
            <p className="mt-1 text-sm text-mbb-primary">
              KES {product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
