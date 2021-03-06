import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rick:kwetterdev@rabbitmq-service'],
        queue: 'message_queue',
        queueOptions: {
          durable: true
        },
    },
  });
  app.listen();
}
bootstrap();
