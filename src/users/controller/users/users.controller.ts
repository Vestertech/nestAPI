import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Sylvester', email: 'Skulboi@gmail.com' };
  }
}
