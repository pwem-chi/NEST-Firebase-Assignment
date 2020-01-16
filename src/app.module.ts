import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { LogoutController } from './logout/logout.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController, RegisterController, LogoutController],
  providers: [AppService],
})
export class AppModule {}
