import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartBtn from '@/shared/components/Add-to-cart-btn.component';
import { useAddtoCart } from '@/shared/hooks/use-add-to-cart.hook';
import { ProductType } from "@/shared/types";

type Props = {
  product: ProductType
}

const ProductItem: FC<Props> = ({ product }) => {
  const addToCardHandler = useAddtoCart({ id: product.id, price: product.price, title: product.title })
  return (
    <li className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          // src={`/${product.img}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={`/1.png`}
          alt={`${product.title}`}
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="p-4 flex flex-col lg:min-h-[184px] justify-between">
        <div className="flex justify-between items-start mb-2">
          <Link href={`products/${product.id}`}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 cursor-pointer">
              {product.title}
            </h3>
          </Link>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap cursor-default">
            {product.price}$
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-3 cursor-default">
          {product.description}
        </p>

        <AddToCartBtn handler={addToCardHandler} />
      </div>
    </li>
  )
}

export default ProductItem
