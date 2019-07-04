import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://citytourroot:CityTour123@ds115874.mlab.com:15874/citytour',
    ),
    AuthModule,
    AdminModule,
    UsersModule,
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
