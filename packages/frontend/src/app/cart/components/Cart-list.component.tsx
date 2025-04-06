'use client'
import { useCartStore } from '@/shared/store/cart.store'
import { useMemo } from 'react'
import CartItem from './Cart-item.component'

const CartList = () => {
  const { cart, clearCart } = useCartStore();
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0);
  }, [cart]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : <>
        <div className="space-y-4">
          {cart.map((product) => (
            <CartItem key={product.id} {...product} quantity={product.quantity ?? 1} />
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={clearCart}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
            >
              Clear cart
            </button>

            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
            >
              Pay
            </button>
          </div>
        </div>
      </>}
    </div>
  )
}

export default CartList
