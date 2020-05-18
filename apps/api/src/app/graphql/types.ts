import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TokenType } from './enum';

@ObjectType()
export class TokenPayload implements TokenPayload {
  @Field({ nullable: false })
  access_token: string;

  @Field(() => TokenType, { nullable: false })
  token_type: TokenType;

  @Field(() => Int)
  expires_in?: number;

  @Field()
  refresh_token?: string;

  @Field()
  id_token?: string;
}
