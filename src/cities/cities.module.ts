import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesSchema } from './cities.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'cities',
        schema: CitiesSchema,
      },
    ]),
  ],
  providers: [CitiesService],
  exports: [CitiesService],
})
export class CitiesModule {}
