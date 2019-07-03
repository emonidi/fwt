import {
  Controller,
  Get,
  Render,
  Post,
  Request,
  Response,
  Inject,
  forwardRef,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('login')
export class LoginController {
  constructor() {}

  @Get()
  @Render('users/login/views/login')
  root() {}

  @Post('/')
  async authenticate(@Request() req: Request, @Response() res: Response) {
    const { username, password } = req.body as any;
  }
}
