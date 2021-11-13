import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public findAll(name: string): User[] {
    if (name) {
      return this.users.filter((user) =>
        user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );
    }
    return this.users;
  }

  public findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public create(user: CreateUserDto): User {
    const newUser = {
      id: nanoid(),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}
