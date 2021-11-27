import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LogisticDto } from './dto/logistic.dto';
import { LogisticService } from './logistic.service';

@UseGuards(JwtAuthGuard)
@Controller('logistic')
export class LogisticController {
  constructor(private logisticservice: LogisticService) {}

  @Post()
  async create(@Body() dto: LogisticDto) {
    return await this.logisticservice.create(dto);
  }
}
