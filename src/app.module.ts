import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/db.module';
import { LogisticModule } from './services/logistic/logistic.module';
import { UserModule } from './services/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, LogisticModule],
})
export class AppModule {}
