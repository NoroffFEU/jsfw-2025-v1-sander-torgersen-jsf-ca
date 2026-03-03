import { create } from "zustand";
import { Products } from "../types/types";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Products;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartActions {
  addToCart: (product: Products) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product: Products) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.product.id === product.id,
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({
            items: [...items, { product, quantity: 1 }],
          });
        }
      },

      removeFromCart: (productId: string) => {
        const { items } = get();
        set({
          items: items.filter((item) => item.product.id !== productId),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
