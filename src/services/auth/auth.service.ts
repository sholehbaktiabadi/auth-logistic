import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/model/user.entity';
import { refreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async getToken(user: User) {
    const payloads = {
      id: user.id,
    };
    return { acceess_token: this.jwtService.sign(payloads) };
  }

  async refreshToken({ refreshToken }: refreshTokenDto) {
    const user = this.jwtService.decode(refreshToken);
    const payloads = {
      id: user['id'],
    };
    const access_token = this.jwtService.sign(payloads);
    return access_token;
  }
}
