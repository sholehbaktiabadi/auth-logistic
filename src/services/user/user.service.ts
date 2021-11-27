import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncryptionText, DencryptionText } from 'src/utility/hasher-text.util';
import { parseMsisdn } from 'src/utility/parse-msisdn.util';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { refreshTokenDto } from '../auth/dto/refresh-token.dto';
import { UserDto } from './dto/user-dto';
import { User } from './model/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userAccountRepository: Repository<User>,
        private readonly authService: AuthService,
      ) {}
    
      async register(data: UserDto) {
        const dto = new UserDto();
        dto.name = data.name;
        dto.username = data.username;
        dto.password = await EncryptionText(data.password);
        dto.msisdn = parseMsisdn(data.msisdn)
    
        try {
          return await this.userAccountRepository.save(dto);
        } catch (error) {
          return { message: error.message, code: error.code };
        }
      }
    
      async login(username: string, password: string) {
        const user = await this.userAccountRepository.findOne({
          where: [{ username }],
        });
        const checkPassword: boolean = await DencryptionText(password, user.password);
        return checkPassword
          ? await this.authService.getToken(user)
          : { message: 'user not found', error: 'NOTFOUND' };
      }

      async refreshToken(refreshToken: refreshTokenDto) {
        return await this.authService.refreshToken(refreshToken);
      }
}
