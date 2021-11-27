import { IsString } from "class-validator";

export class UserDto {
    @IsString()
    name: string;
    @IsString()
    msisdn: string;
    @IsString()
    username: string;
    @IsString()
    password: string;
  }
  