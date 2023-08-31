import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/abcd')
  getName(): number {
    return this.appService.getAge();
  }

  @Get('/xyz')
  getChoice(): String {
    return this.appService.getChoice().then((message) => {
          return 'This is in the then ' + message;
        })
        .catch((message) => {
          return 'This is in the catch ' + message;
        });;
  }
}
