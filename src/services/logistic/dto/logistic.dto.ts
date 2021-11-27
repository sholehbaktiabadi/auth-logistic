import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LogisticDto {
  @IsNotEmpty()
  @IsString()
  logistic_name: string;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsString()
  destination_name: string;
  @IsNotEmpty()
  @IsString()
  origin_name: string;
  @IsNotEmpty()
  @IsString()
  duration: string;
}
