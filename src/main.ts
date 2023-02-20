import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./exceptions/all-exceptions.filter";
import { HttpExceptionFilter } from "./exceptions/exception.filter";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./validation/pipe/validation.pipe";
import { PrismaClientExceptionFilter } from "./exceptions/prisma-client-exception.filter";

// src/main.ts


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Beyik yol super admin')
    .setDescription('Beyik yol super admin')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(6967);
}
bootstrap();
