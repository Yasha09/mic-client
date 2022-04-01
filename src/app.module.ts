import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiOneModule } from './api-one/api-one.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/two_app', {
      autoCreate: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'yasha03',
    //   database: 'test',
    //   autoLoadEntities: true,
    //   synchronize: true,
    //   entities: ['dist/**/*.entity.js'],
    // }),
    ApiOneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
