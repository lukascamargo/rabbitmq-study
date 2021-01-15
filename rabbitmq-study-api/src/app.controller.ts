import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(@Res() res) {
    const message = {
      "operation" : "getAvailableExtensions",
      "type" : "request",
      "id" : 6666,
      "param": {
          "init" : "+551131725140",
          "final" : "+551131725160"
      }
  };


    this.appService
      .client
      .send('channel-test', message)
      .subscribe(
        (result) => {
          console.log(result);
          res.json(result);
        },
        error => {
          console.log(error);
          res.json(error);
        }
      );
  }
}
