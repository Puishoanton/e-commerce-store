import { create } from "zustand";
import { CartProduct } from "../types"
import { persist } from "zustand/middleware";
import { CART_KEY_LOCAL_STORAGE } from "../constants";

type CartType = {
  cart: Array<CartProduct>
  addToCart: (product: CartProduct) => void
  removeFromCart: (removeId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => {
        set((store) => {
          // ({
          //   cart: store.cart.filter(({ id }) => id !== removeId)
          // })
          const isProductExist = store.cart.find(({ id }) => id === product.id)
          if (isProductExist) {
            return {
              cart: store.cart.map((cartItem) => cartItem.id === product.id
                ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity + 1 : 1 }
                : cartItem
              )
            }
          }
          return {
            cart: [...store.cart, { ...product, quantity: 1 }]
          }
        })
      },
      removeFromCart: (removeId) => {
        set((store) => {
          const isLastOne = store.cart.find(({ id }) => id === removeId)?.quantity === 1
          if (isLastOne) {
            return {
              cart: store.cart.filter(({ id }) => id !== removeId)
            }
          }
          return {
            cart: store.cart.map((cartItem) => cartItem.id === removeId
              ? { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : 1 }
              : cartItem
            )
          }
        })
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: CART_KEY_LOCAL_STORAGE
    },
  ),
)
