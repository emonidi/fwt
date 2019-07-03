import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './auth.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'local',
      property: 'profile',
      session: true,
    }),
  ],
  providers: [LocalStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
