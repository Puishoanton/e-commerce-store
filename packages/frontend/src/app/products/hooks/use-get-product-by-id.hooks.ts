import { API_PRODUCTS, SERVER_URL } from "@/shared/service/api"
import { productService } from "@/shared/service/product.service"
import { ProductType } from "@/shared/types"
import { useQuery, UseQueryResult } from "@tanstack/react-query"


export const useGetProductByIdQuery = (id: string = ''): UseQueryResult<ProductType, Error> => {
  return useQuery({
    queryKey: [`${SERVER_URL}/${API_PRODUCTS.MAIN}`, id],
    queryFn: async () => productService.getProductById(id),
    retry: false
  })
}
