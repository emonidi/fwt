import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { LoginController } from './login/login.controller';
import { AuthModule } from '../auth/auth.module';
import { CitiesControler } from './cities.controller';
import { CitiesModule } from '../cities/cities.module';

@Module({
  imports: [AuthModule, CitiesModule],
  controllers: [DashboardController, LoginController, CitiesControler],
})
export class AdminModule {}
