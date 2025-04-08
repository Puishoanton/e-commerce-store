import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductQueryDto } from './dto/product-query.dto';
import { Prisma } from '@prisma/client';
import { GetProductReternType } from './product.types';

@Injectable()
export class ProductService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  public async createProduct(data: CreateProductDto): Promise<CreateProductDto> {
    return this.prismaService.product.create({
      data,
      omit: {
        updatedAt: true,
        createdAt: true
      }
    })
  }

  public async getProducts({ page = 1, limit = 10, search, category }: ProductQueryDto): Promise<GetProductReternType> {
    const skip = (page - 1) * limit;

    const where: Prisma.ProductWhereInput = {
      AND: [
        category && category !== 'All' ? { category } : {},
        search ? {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
          ]
        } : {}
      ]
    }

    const products = await this.prismaService.product.findMany({
      where,
      skip,
      take: +limit,
      omit: {
        updatedAt: true,
        createdAt: true
      }
    })
    const totalCount = await this.prismaService.product.count({
      where
    })
    return {
      products,
      totalCount
    }
  }

  public async getProductById(id: string): Promise<CreateProductDto> {
    return this.prismaService.product.findUnique({
      where: {
        id
      },
      omit: {
        updatedAt: true,
        createdAt: true
      }
    })
  }
}
