import { IsNotEmpty, IsNumber, IsOptional, Length, Min } from 'class-validator';

export class ProdutoDTO {
  @IsOptional()
  @IsNotEmpty()
  @Length(1, 20)
  nome: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  preco: number;

  @IsOptional()
  @IsNotEmpty()
  img: string;
}
