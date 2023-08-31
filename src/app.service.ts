import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAge(): number {
    return Math.random() * 1000;
  }

  getChoice(): any {
    return new Promise((resolve, reject) => {
      let a = 1 + 1;
      if (a !== 2) {
        resolve('Success');
      } else {
        reject('Failed');
      }
      // promise
      //   .then((message) => {
      //     return 'This is in the then ' + message;
      //   })
      //   .catch((message) => {
      //     return 'This is in the catch ' + message;
      //   });
    });
  }
}
