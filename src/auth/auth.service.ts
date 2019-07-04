import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject('UserService') private readonly userService) {}
  async signIn(email, password): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.userService.getUserByEmail(email);

        if (user && user[0]) {
          const confirmed = await bcrypt.compare(password, user[0].password);

          if (!confirmed) {
            reject(new UnauthorizedException());
          } else {
            return resolve(user[0]);
          }
        } else {
          reject(new UnauthorizedException());
        }
      } catch (e) {
        reject(new UnauthorizedException());
      }
    });
  }
}
