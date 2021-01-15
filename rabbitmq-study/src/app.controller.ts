import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('channel-test')
  getHello(@Payload() data: any) {
    console.log('Data', data);

    // return this.appService.getHello();
  }
}
