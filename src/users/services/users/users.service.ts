import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Sylvester', email: 'ifeanyi@gmail.com' },
    { username: 'Sylver', email: 'ify@gmail.com' },
    { username: 'ifeanyi', email: 'sommy@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id: 1, username: 'Sylvester', email: 'ifeanyi@gmail.com' };
  }
}
