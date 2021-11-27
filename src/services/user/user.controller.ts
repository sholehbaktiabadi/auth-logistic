import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { refreshTokenDto } from '../auth/dto/refresh-token.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDto } from './dto/user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() data: UserDto) {
    return this.userService.register(data);
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return await this.userService.login(username, password);
  }

  @Post('refresh-token')
  async refreshToken(@Body() refreshToken: refreshTokenDto) {
    return await this.userService.refreshToken(refreshToken);
  }
}
