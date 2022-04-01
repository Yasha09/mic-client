import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOneService } from './api-one.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api-one')
export class ApiOneController {
  constructor(
    private userService: ApiOneService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post('register')
  async register(@Body('name') name: string) {
    const user = await this.userService.register(name);
    this.client.emit('register_user', user);
    return user;
  }
}
