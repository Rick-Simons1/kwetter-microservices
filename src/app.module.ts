import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/entities/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Kwetter-Microservices',
      entities: [User, Message],
      synchronize: true,
    }),
    UserModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
