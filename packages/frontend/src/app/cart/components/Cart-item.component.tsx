import { useCartStore } from '@/shared/store/cart.store';
import { FC } from 'react'

type Props = {
  id: string,
  title: string,
  price: number
  quantity: number
};

const CartItem: FC<Props> = ({ id, price, title, quantity }) => {
  const { addToCart, removeFromCart, } = useCartStore();
  return (
    <li className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-4 flex items-center justify-between">

      <div className="flex-grow px-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">{title}</h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-bold">${(price * quantity).toFixed(2)}</p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => removeFromCart(id)}
          className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          -
        </button>

        <span className="mx-3 text-lg font-medium text-gray-900 dark:text-white">{quantity}</span>

        <button
          onClick={() => addToCart({ id, title, price })}
          className="w-8 h-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition">
          +
        </button>
      </div>
    </li>
  )
}

export default CartItem
