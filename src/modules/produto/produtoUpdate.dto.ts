import { IsOptional } from 'class-validator';
import { ProdutoDTO } from './produto.dto';

export class ProdutoUpdateDTO extends ProdutoDTO {
  @IsOptional()
  nome: string;

  @IsOptional()
  preco: number;

  @IsOptional()
  img: string;
}
