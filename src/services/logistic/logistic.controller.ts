import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LogisticDto } from './dto/logistic.dto';
import { LogisticService } from './logistic.service';

@Controller('logistic')
export class LogisticController {
    constructor(private logisticservice: LogisticService){}

    @Post()
    async create(@Body() dto: LogisticDto) {
      return await this.logisticservice.create(dto)
    }
}
