import { Controller, Get, Headers, Ip, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { IpAddress } from './ip.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Headers() headers: any, @Ip() ip: any, @IpAddress() ipAddress: any): string {
    Logger.log(ipAddress);
    Logger.log('========----------------------========');
    Logger.log(headers);
    return this.appService.getHello();
  }
}
