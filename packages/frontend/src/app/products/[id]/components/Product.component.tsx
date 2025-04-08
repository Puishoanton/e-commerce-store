'use client'
import Image from "next/image";
import { useGetProductByIdQuery } from "../../hooks/use-get-product-by-id.hooks";
import { useParams } from "next/navigation";
import AddToCartBtn from "@/shared/components/Add-to-cart-btn.component";
import { useAddtoCart } from "@/shared/hooks/use-add-to-cart.hook";

const Product = () => {
  const id = useParams().id?.toString();
  const { data: product } = useGetProductByIdQuery(id)
  const addToCardHandler = useAddtoCart({ id: product?.id, price: product?.price, title: product?.title })

  return (
    <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <Image
          src={`${product?.img}=${Math.random()}`}
          alt={product?.title ?? 'Title'}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-between space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product?.title ?? 'Title'}</h1>
          <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mt-2">${product?.price ?? 0}</p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-base">{product?.description ?? 'description'}</p>

        <AddToCartBtn handler={addToCardHandler} />
      </div>
    </div>
  );
}
export default Product
