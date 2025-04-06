import { Metadata } from "next";
import Product from "./components/Product.component";

type Props = {
  params: Promise<{ id: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  return {
    title: `Product ${id} | E-commerce Store`,
    description: "E-commerce Store",

  };
};

const ProductPage = () => {
  return (
    <Product />
  );
}

export default ProductPage
