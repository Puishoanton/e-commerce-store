import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
