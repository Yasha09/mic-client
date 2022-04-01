import { Module } from '@nestjs/common';
import { ApiOneService } from './api-one.service';
import { ApiOneController } from './api-one.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserM, UserSchema } from './app-one.model';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserM.name, schema: UserSchema }]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost'],
          queue: 'main_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [ApiOneService],
  controllers: [ApiOneController],
})
export class ApiOneModule {}
