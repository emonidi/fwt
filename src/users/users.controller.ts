import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  HttpException,
  Next,
} from '@nestjs/common';
import { UserService } from './users.service';
import * as bcrypt from 'bcrypt';
import { UserInterface } from './user.interface';

@Controller('users')
export class UsersApiContoller {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Request() req: Request,
    @Response() res: Response,
    @Next() next,
  ) {
    const saltRounds = 10;
    const body: UserInterface = req.body as any;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (!err)
        bcrypt.hash(body.password, salt, async (err, hash) => {
          body.password = hash;
          try {
            let entry = await this.userService.add(body);
            (res as any).json(entry);
          } catch (e) {
            next(new HttpException(e.message, 500));
          }
        });
    });
  }

  @Get()
  findAll(@Request() request, @Response() response) {
    response.json({ message: 'hi' });
  }
}
