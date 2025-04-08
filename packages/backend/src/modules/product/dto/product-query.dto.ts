import { Category } from "@prisma/client"
import { Type } from "class-transformer"
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator"

export class ProductQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  public readonly page?: number = 1

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  public readonly limit?: number = 10

  @IsOptional()
  @IsString()
  public readonly search?: string

  @IsOptional()
  @IsEnum(Category)
  public readonly category?: Category
}
