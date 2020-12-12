import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notifications')
  getHello(@Payload() data: any, @Ctx() context: RmqContext): string {
    console.log('Data', data);
    console.log('Context', context);
    console.log('Channel Ref', context.getChannelRef());
    console.log('Message', context.getMessage());
    
    const channel = context.getChannelRef();

    channel.ack(context.getMessage());
    return this.appService.getHello();
  }
}
