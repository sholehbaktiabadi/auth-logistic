import { Module } from '@nestjs/common';
import { LogisticService } from './logistic.service';
import { LogisticController } from './logistic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logistic } from './model/logistic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Logistic])],
  providers: [LogisticService],
  controllers: [LogisticController]
})
export class LogisticModule {}
