import { CreateProductDto } from "./dto/create-product.dto"

export type GetProductReternType = {
  products: Array<CreateProductDto>
  totalCount: number
}
