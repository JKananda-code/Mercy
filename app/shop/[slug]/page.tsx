// app/shop/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:flex md:gap-10">
      <div className="md:w-1/2">
        <div className="aspect-square w-full rounded-3xl bg-pink-50" />
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {product.brand}
        </p>
        <h1 className="mt-2 font-display text-3xl">{product.name}</h1>
        <p className="mt-3 text-xl text-mbb-primary">
          KES {product.price.toLocaleString()}
        </p>
        <p className="mt-4 text-gray-700">{product.description}</p>

        <button
          className="mt-6 w-full rounded-full bg-mbb-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-mbb-dark md:w-auto"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
