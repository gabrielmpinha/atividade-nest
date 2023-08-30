import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { ProdutoModule } from './modules/produto/produto.module';
import { ProdutoController } from './modules/produto/produto.controller';
import { ProdutoService } from './modules/produto/produto.service';

@Module({
  imports: [ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
