"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { cart } = useCart();
  const count = cart.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 py-4">
        <Link href="/" className="font-display text-xl text-mbb-primary">
          Mercy Beauty Boutique
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/shop">Shop</Link>
          <Link href="/salon" className="hover:underline">Salon</Link>
          <Link href="/salon/trending" className="hover:underline">Trending</Link>

          <Link href="/cart" className="relative">
            <span>Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-mbb-primary text-white text-xs rounded-full px-2 py-0.5">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
