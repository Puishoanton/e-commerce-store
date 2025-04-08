import { Category } from "@prisma/client"
import { IsEnum, IsInt, IsString } from "class-validator"

export class CreateProductDto {
  @IsString()
  public readonly title: string

  @IsString()
  public readonly description: string

  @IsInt()
  public readonly price: number

  @IsString()
  public readonly img: string

  @IsEnum(Category)
  public readonly category: Category
}

