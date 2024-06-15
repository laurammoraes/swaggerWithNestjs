import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CompaniesModule } from './companies/companies.module';

async function bootstrap() {
  const app = await NestFactory.create(CompaniesModule);

  const config = new DocumentBuilder()
    .setTitle('Companies')
    .setDescription('The companies API description')
    .setVersion('1.0')
    .addTag('companies')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
