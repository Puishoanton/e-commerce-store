'use client'
import Link from "next/link";
import { useGetEndpoint } from "@/shared/hooks/use-get-endpoint.hook";

const Header = () => {
  const endpoint = useGetEndpoint();
  return (
    <header className="mb-8 text-center sm:text-left flex justify-between">
      <Link href='/products'>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          E-commerce Store
        </h1>
      </Link>
      <Link href={endpoint === 'cart' ? '/products' : '/cart'} >{endpoint === 'cart' ? 'Products' : 'Cart'}</Link>
    </header>
  )
}

export default Header
