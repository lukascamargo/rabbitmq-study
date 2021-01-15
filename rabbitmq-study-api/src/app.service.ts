import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  public client: ClientProxy;

  constructor() {
      this.client = ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: {
              url: "redis://redis-17859.c74.us-east-1-4.ec2.cloud.redislabs.com:17859",
              password: "kJlT6K8KTXIaJbje42YYXV8OebGjVX5E",

          }
      });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
