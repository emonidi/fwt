import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesModule } from '../cities/cities.module';

@Module({
  imports: [CitiesModule],
  controllers: [CitiesController],
})
export class ApiModule { }
