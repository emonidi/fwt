import { Strategy } from 'passport-local';
import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('UserService') private userService) {
    super();
  }

  async validate(email, password, done) {
    const result = await this.userService.getUserByEmail(email);
    console.log(result);
  }
}
