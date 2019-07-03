import { Get, Post, Controller, Render } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin/dashboard')
export class DashboardController {
  @Get()
  @Render('admin/views/dashboard')
  root() {}
}
