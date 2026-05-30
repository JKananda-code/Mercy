// components/layout/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-pink-100 bg-blue-300 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg text-mbb-primary">Mercy Beauty Boutique</p>
          <p className="mt-1 text-gray-600">
            Premium cosmetics and elegant hairstyles for every occasion.
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-semibold text-gray-800">Quick links</p>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/shop">Shop</Link>
              <Link href="/salon">Salon</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Connect</p>
            <div className="mt-2 flex flex-col gap-1">
             
              <p>Juja, Kiambu</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mercy Beauty Boutique. All rights reserved.
      </p>
    </footer>
  );
}
