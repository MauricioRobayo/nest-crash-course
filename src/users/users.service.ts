import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '1',
      name: 'John',
    },
    {
      id: '2',
      name: 'Doe',
    },
  ];

  public findAll(): any {
    return this.users;
  }

  public findOne(id: string): any {
    return this.users.find((user) => user.id === id);
  }
}
