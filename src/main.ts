import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // TODO: Remueve las properties que no hagn match con los DTO's
      forbidNonWhitelisted: true // TODO: Genera exception con properties que no existen dentro de los DTO's
    })
   )
  await app.listen(3000);
}
bootstrap();
