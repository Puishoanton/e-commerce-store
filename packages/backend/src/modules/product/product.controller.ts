import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  public async createProduct(@Body() createProduct: CreateProductDto) {
    return this.productService.createProduct(createProduct)
  }
  @Get()
  public async getProducts(@Query() query: ProductQueryDto) {
    return this.productService.getProducts(query)
  }
  @Get(':id')
  public async getProductById(@Param('id') id: string,) {
    return this.productService.getProductById(id)
  }
}
