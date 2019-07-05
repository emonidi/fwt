import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('cities') private model) {}

  async add(city) {
    return await this.model.create(city);
  }

  async findAll() {
    return await this.model.find();
  }

  async findByParam(paramObject) {
    return await this.model.find(paramObject);
  }

  async updateCity(cityId, city) {
    const doc = await this.model.updateOne(
      { _id: cityId },
      { ...city },
      {
        new: true,
      },
    );

    return await doc;
  }
}
