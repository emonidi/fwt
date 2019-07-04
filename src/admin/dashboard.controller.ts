import {
  Get,
  Post,
  Controller,
  Render,
  Request,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Controller('admin/dashboard')
export class DashboardController {
  @Get('/')
  @Render('admin/views/dashboard')
  @UseGuards(new AuthGuard())
  root(@Request() req) {
    console.log(req);
  }
}
