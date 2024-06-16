import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  owner: string;
}
