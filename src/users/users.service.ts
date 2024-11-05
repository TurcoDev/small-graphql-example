import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuid } from 'uuid';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: uuid(),
      name: 'John',
      email: 'John@gmail.com',
    },
    {
      id: uuid(),
      name: 'Jane',
      email: 'Jane@gmail.com',
    }
  ];

  findAll(): User[] {
    return this.users;
  }

  create(input: CreateUserInput): User {
    const user: User = {
      id: uuid(),
      ...input,
    };
    this.users.push(user);
    return user;
  }

  update(id: string, input: UpdateUserInput): User {
    const user: User = this.users.find((user: User) => user.id === id);
    
    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, input);
    return user;
  }

  remove(id: string): User {
    const user: User = this.users.find((user: User) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }

    this.users = this.users.filter((user: User) => user.id !== id);
    return user;
  }
}
