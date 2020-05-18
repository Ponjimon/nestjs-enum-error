import { registerEnumType } from '@nestjs/graphql';

export enum TokenType {
  BEARER = 'Bearer',
}

registerEnumType(TokenType, {
  name: 'TokenType',
});
