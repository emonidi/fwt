import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('cities') private model) {}

  async findAll() {
    return await this.model.findAll();
  }
}
