import { HttpService } from "./http.service"
import { API_PRODUCTS, SERVER_URL } from "./api"
import { ITEM_PER_PAGE } from "../constants";
import { ProductsWithParamsResponseType, ProductType } from "../types"

class ProductService {
  constructor(
    private readonly httpService: HttpService
  ) { }

  public async getProducts(search?: string, page: number = 1, limit: number = ITEM_PER_PAGE, category?: string): Promise<ProductsWithParamsResponseType> {
    const url = new URL(`${SERVER_URL}/${API_PRODUCTS.MAIN}`,)

    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    if (search) url.searchParams.append("search", search);
    if (category) url.searchParams.append("category", category);

    const products = await this.httpService.get<ProductsWithParamsResponseType>(url.toString(),)

    return products
  }
  public async getProductById(id: string): Promise<ProductType> {
    const url = new URL(`${SERVER_URL}/${API_PRODUCTS.MAIN}/${id}`,)

    return await this.httpService.get<ProductType>(url.toString(),)
  }
}

export const productService = new ProductService(new HttpService)
