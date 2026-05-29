// app/page.tsx
import Link from 'next/link';
import { services } from '@/data/services';
import { Product } from './types/product';

export default function HomePage({products}: {products: Product[]}) {
  const featuredProducts = products?.slice(0,4)?? [];
  const featuredServices = services?.slice(0,3)?? [];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-mbb-light to-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-xs uppercase tracking-[0.2em] text-mbb-primary">
              Mercy Beauty Boutique
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">
              Beauty that feels <span className="text-mbb-primary">effortless</span>.
            </h1>
            <p className="mt-4 text-pink-700">
              Discover curated cosmetics and book elegant hairstyles with our experienced stylists.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-mbb-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mbb-dark"
              >
                Shop products
              </Link>
              <Link
                href="/salon"
                className="rounded-full border border-mbb-primary px-6 py-2 text-sm font-semibold text-mbb-primary hover:bg-mbb-primary/5"
              >
                Book a hairstyle
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-72 rounded-3xl bg-pink-100" />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Featured products</h2>
          <Link href="/shop" className="text-sm text-mbb-primary hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group rounded-2xl border border-pink-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-square w-full rounded-xl bg-pink-50" />
              <p className="mt-3 text-sm text-gray-500">{product.brand}</p>
              <p className="text-sm font-semibold text-gray-900">{product.name}</p>
              <p className="mt-1 text-sm text-mbb-primary">
                KES {product.price.toLocaleString()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Salon services</h2>
            <Link href="/salon" className="text-sm text-mbb-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/salon/${service.slug}`}
                className="group rounded-2xl border border-pink-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="h-40 rounded-xl bg-pink-50" />
                <p className="mt-3 text-sm font-semibold text-gray-900">{service.name}</p>
                <p className="mt-1 text-sm text-gray-600">
                  From KES {service.startingPrice.toLocaleString()} • {service.durationMinutes} mins
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
