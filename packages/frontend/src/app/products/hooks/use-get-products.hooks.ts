import { ITEM_PER_PAGE } from "@/shared/constants"
import { API_PRODUCTS, SERVER_URL } from "@/shared/service/api"
import { productService } from "@/shared/service/product.service"
import { ProductsWithParamsResponseType } from "@/shared/types"
import { useQuery, UseQueryResult } from "@tanstack/react-query"

type Props = {
  search?: string,
  page?: number,
  limit?: number,
  category?: string
}

export const useGetProductsQuery = ({
  search = '',
  page = 1,
  limit = ITEM_PER_PAGE,
  category = ''
}: Props): UseQueryResult<ProductsWithParamsResponseType, Error> => {
  return useQuery({
    queryKey: [`${SERVER_URL}/${API_PRODUCTS.MAIN}`, search, page, limit, category],
    queryFn: async () => productService.getProducts(search, page, limit, category),
    retry: false
  })
}
