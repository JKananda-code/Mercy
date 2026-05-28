"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeItem, clearCart, getTotal } = useCart();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="font-display text-3xl">Your Cart</h1>

      {cart.items.length === 0 && (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      )}

      <div className="mt-6 space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-xl"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.quantity} × KES {item.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.items.length > 0 && (
        <div className="mt-8">
          <p className="text-xl font-semibold">
            Total: KES {getTotal().toLocaleString()}
          </p>

          <button
            onClick={clearCart}
            className="mt-4 bg-red-500 text-white px-6 py-3 rounded-full"
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
}
