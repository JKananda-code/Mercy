"use client";

import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const { addItem } = useCart();

  if (!product) return <p>Not found</p>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-3xl">{product.name}</h1>

      <button
        onClick={() =>
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0],
            quantity: 1,
          })
        }
        className="mt-6 bg-mbb-primary text-white px-6 py-3 rounded-full"
      >
        Add to cart
      </button>
    </div>
  );
}
