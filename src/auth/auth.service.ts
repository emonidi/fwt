import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(@Inject('UserService') private userService) {}

  async signIn(username, password) {
    const entry = await this.userService.getUserByEmai(username);
    if (entry && entry[0]) {
      console.log(entry);
    }
  }
}
