import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly userModel) {}

  async add(user) {
    const entry = await new this.userModel(user);
    return await entry.save();
  }

  async getUserByEmail(email: String) {
    const entry = await this.userModel.find({ email });
    return entry;
  }
}
