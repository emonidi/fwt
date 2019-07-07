import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { LoginController } from './login/login.controller';
import { AuthModule } from '../auth/auth.module';
import { CitiesControler } from './cities.controller';
import { CitiesModule } from '../cities/cities.module';
import { AuthExceptionFilter } from './exception.fitler';

@Module({
  imports: [AuthModule, CitiesModule],
  providers: [AuthExceptionFilter],
  controllers: [DashboardController, LoginController, CitiesControler],
})
export class AdminModule { }
