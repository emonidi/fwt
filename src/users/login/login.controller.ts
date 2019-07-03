import {
  Controller,
  Get,
  Render,
  Post,
  Request,
  Response,
  Inject,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('login')
export class LoginController {
  constructor(@Inject('AuthService') private readonly authService) {}

  @Get()
  @Render('users/login/views/login')
  root() {}

  @Post('/')
  async authenticate(@Request() req: Request, @Response() res: Response) {
    const { username, password } = req.body as any;
  }
}
