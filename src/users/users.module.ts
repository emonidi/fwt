import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { UsersApiContoller } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [LoginController, UsersApiContoller],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
