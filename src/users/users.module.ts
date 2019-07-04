import { Module } from '@nestjs/common';
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
  controllers: [UsersApiContoller],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
