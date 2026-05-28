"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { CartItem, CartState } from "@/types/cart";

type CartContextType = {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>({ items: [] });

  const addItem = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.items.find((i) => i.id === item.id);

      if (existing) {
        return {
          items: prev.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }

      return { items: [...prev.items, item] };
    });
  };

  const removeItem = (id: string) => {
    setCart((prev) => ({
      items: prev.items.filter((i) => i.id !== id),
    }));
  };

  const clearCart = () => setCart({ items: [] });

  const getTotal = () =>
    cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
