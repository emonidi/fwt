import {
  Controller,
  Get,
  Render,
  Post,
  Request,
  Response,
  Inject,
  forwardRef,
  UnauthorizedException,
} from '@nestjs/common';
import * as express from 'express';
import * as bcrypt from 'bcrypt';

@Controller('admin/login')
export class LoginController {
  constructor(@Inject('AuthService') private authService) {}

  @Get()
  @Render('admin/login/views/login')
  root() {}

  @Post('/')
  async authenticate(
    @Request() req: Request,
    @Response() res: express.Response,
  ) {
    const { username, password } = req.body as any;

    try {
      const user = await this.authService.signIn(username, password);
      req.session.user = user;
      user && user.role === 'admin' && res.redirect('/admin/dashboard');
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Get('logout')
  logout(@Request() req, @Response() res) {
    req.session.destroy();
    res.redirect('/');
  }
}
