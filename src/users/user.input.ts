import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  
  @Field()
  name: string;

  @Field()
  email: string;
}

@InputType()
export class UpdateUserInput {

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}