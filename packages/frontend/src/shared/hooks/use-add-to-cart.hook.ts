import { useCartStore } from "../store/cart.store"


type Props = {
  id?: string,
  title?: string,
  price?: number
}
export const useAddtoCart = ({ id = '', price = 0, title = '' }: Props) => {
  const addToCardHandler = useCartStore((state) => state.addToCart)
  const cartProduct = {
    id,
    title,
    price
  }
  return () => addToCardHandler(cartProduct)
}
