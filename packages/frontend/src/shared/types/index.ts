export type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
}

export type ProductsWithParamsResponseType = {
  products: Array<ProductType>,
  totalCount: number
}

export type CartProduct = Pick<ProductType, 'id' | 'title' | 'price'> & {
  quantity?: number;
}
