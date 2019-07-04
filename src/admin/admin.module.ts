import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { LoginController } from './login/login.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [DashboardController, LoginController],
})
export class AdminModule {}
