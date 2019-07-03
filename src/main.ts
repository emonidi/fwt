import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import bodyParser = require('body-parser');
import * as passport from 'passport';

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule);

  app.setViewEngine('pug');
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src'));

  await app.listen(3000);
}

bootstrap();
