import { IsNotEmpty, IsString } from 'class-validator';
export class BlogDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  slug: string;
}
