/* eslint-disable @typescript-eslint/camelcase */
import { Resolver, Query } from '@nestjs/graphql';
import { TokenPayload } from './types';
import { TokenType } from './enum';

@Resolver()
export class AppResolver {
  @Query(() => TokenPayload)
  getToken(): TokenPayload {
    return {
      access_token: 'blabla',
      token_type: TokenType.BEARER,
    };
  }
}
