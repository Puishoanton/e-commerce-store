import { Metadata } from "next";
import CartList from "./components/Cart-list.component";

export const metadata: Metadata = {
  title: "Cart | E-commerce Store",
  description: "E-commerce Store",
};

const Cart = () => {
  return (
    <CartList />
  );
}

export default Cart
