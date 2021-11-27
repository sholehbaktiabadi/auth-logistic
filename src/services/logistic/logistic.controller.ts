import { Body, Controller, Post } from '@nestjs/common';
import { LogisticDto } from './dto/logistic.dto';
import { LogisticService } from './logistic.service';

@Controller('logistic')
export class LogisticController {
    constructor(private logisticservice: LogisticService){}

      
    @Post()
    async login(@Body() dto: LogisticDto) {
      return await this.logisticservice.create(dto)
    }
}
