import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogisticDto } from './dto/logistic.dto';
import { Logistic } from './model/logistic.entity';

@Injectable()
export class LogisticService {
    constructor(@InjectRepository(Logistic) private logisticRepository: Repository<Logistic>){}

    async create(data: LogisticDto) {
        const dto = new LogisticDto();
        dto.logistic_name = data.logistic_name;
        dto.amount = data.amount;
        dto.destination_name = data.destination_name;
        dto.origin_name = data.origin_name;
        dto.duration = data.duration;
    
        try {
          return await this.logisticRepository.save(dto);
        } catch (error) {
          return { message: error.message, code: error.code };
        }
      }
}
