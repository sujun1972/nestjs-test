import { Controller, Get, Headers, Ip, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Headers() headers: any, @Ip() ip: any): string {
    Logger.log(ip);
    Logger.log('========----------------------========');
    Logger.log(headers);
    return this.appService.getHello();
  }
}
