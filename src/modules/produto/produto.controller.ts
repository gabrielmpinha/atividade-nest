import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDTO } from './produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post('create') //criar
  async create(@Body() data: ProdutoDTO) {
    return await this.produtoService.create(data);
  }

  @Delete('delete/:id') //deletar
  async delete(@Param() params: any) {
    return await this.produtoService.delete(params.id);
  }

  @Get('all') //pegar todos
  async findAll() {
    const produtos = await this.produtoService.findAll();
    return produtos;
  }

  @Get('get/:id') //pegar um
  async find(@Param() params: any) {
    const produto = await this.produtoService.find(params.id);
    return produto;
  }

  @Put('update/:id') //atualizar
  async update(@Param() params: any, @Body() data: ProdutoDTO) {
    return await this.produtoService.update(params.id, data);
  }
}
