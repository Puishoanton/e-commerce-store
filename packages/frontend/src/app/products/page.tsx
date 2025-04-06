import { Metadata } from "next";
import ProductsList from "./components/Products-list.component";

export const metadata: Metadata = {
  title: "Products | E-commerce Store",
  description: "E-commerce Store",
};

const Products = () => {
  return (
    <ProductsList />
  );
}

export default Products
