
import {
  IsString,
  IsInt,
  MinLength,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTokohSejarahDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  nama: string;

  @IsString()
  @MinLength(3)
  negara: string;

  @IsString()
  @MinLength(3)
  peran: string;

  @IsString()
  @MinLength(10)
  biografi: string;

  @IsInt()
  @Min(1)
  tahunLahir: number;
}
