import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('register')
export class RegisterController {
    @Post()
    create(@Body() createUserDto: CreateUserDto){
      return 'This action adds a new user';
    }
}
