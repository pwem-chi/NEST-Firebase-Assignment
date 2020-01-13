import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get('')
  findUsers(){
      return 'This action retrieves all users';
  }

}
