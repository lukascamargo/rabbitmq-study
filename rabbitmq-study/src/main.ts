import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: "redis://redis-17859.c74.us-east-1-4.ec2.cloud.redislabs.com:17859",
      password: "kJlT6K8KTXIaJbje42YYXV8OebGjVX5E"
  }
  });
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
