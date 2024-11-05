import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
  ) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('input') input: CreateUserInput): User {
    return this.usersService.create(input);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(@Args('id') id: string, @Args('input') input: UpdateUserInput): User {
    return this.usersService.update(id, input);
  }

  @Mutation(() => User, { name: 'removeUser' })
  removeUser(@Args('id') id: string): User {
    return this.usersService.remove(id);
  }
}
