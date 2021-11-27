import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Env } from 'src/config/env-loader';
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = Env();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
  ],
})
export class DatabaseModule {}
