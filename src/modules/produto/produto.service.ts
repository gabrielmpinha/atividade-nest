import { Injectable } from '@nestjs/common';
import { ProdutoDTO } from './produto.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProdutoDTO) {
    const produtoExiste = await this.prisma.produto.findFirst({
      where: { nome: data.nome },
    });

    if (produtoExiste) {
      throw new Error('Produto já existe');
    }

    const produto = await this.prisma.produto.create({
      data,
    });
    return data;
  }

  async delete(id: string) {
    const produtoExiste = await this.prisma.produto.findUnique({
      where: {
        id: id,
      },
    });

    if (!produtoExiste) {
      throw new Error('Produto não existe');
    }

    return await this.prisma.produto.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll() {
    return await this.prisma.produto.findMany();
  }

  async find(id: string) {
    return this.prisma.produto.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: ProdutoDTO) {
    const produtoExiste = await this.prisma.produto.findUnique({
      where: {
        id: id,
      },
    });

    if (!produtoExiste) {
      throw new Error('Produto não existe');
    }

    return await this.prisma.produto.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
