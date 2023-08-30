import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUrl,
  Length,
  Matches,
  Min,
} from 'class-validator';

export class ProdutoDTO {
  //@IsOptional()
  @IsNotEmpty()
  @Length(1, 20)
  nome: string;

  //@IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  preco: number;

  //@IsOptional()
  @IsNotEmpty()
  @IsUrl()
  @Matches(RegExp(/[^\s]+(.*?)\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/), {
    message: 'URL needs to be a image',
  })
  img: string;
}
