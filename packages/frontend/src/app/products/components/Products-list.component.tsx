'use client'
import ProductItem from './Product-item.component'
import { useGetProductsQuery } from '../hooks/use-get-products.hooks'
import Loader from '@/shared/components/Loader.component'
import Pagination from '@/shared/components/Pagination.component'
import { useProductsQuery } from '../hooks/use-products-query.hooks'
import Filter from '@/shared/components/Filter.component'

const ProductsList = () => {
  const { page, limit, search, category, onPageChange, onChooseCategory, debouncedSearch, } = useProductsQuery()
  const { data, isLoading } = useGetProductsQuery({ page, limit, search, category })

  return (
    <>
      <Filter debouncedSearch={debouncedSearch} onChooseCategory={onChooseCategory} />
      {isLoading
        ? <Loader />
        : <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data?.products.length ?
            data.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
            : <div>Products not found</div>}
        </ul>}

      {Boolean(data?.totalCount) && (
        <Pagination
          currentPage={page}
          itemsPerPage={limit}
          totalItems={data?.totalCount}
          onPageChange={onPageChange()}
        />
      )}
    </>
  )
}

export default ProductsList
