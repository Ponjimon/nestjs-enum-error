import { Module } from '@nestjs/common';

import {
  GqlModuleOptions,
  GraphQLFederationModule,
  GraphQLModule,
} from '@nestjs/graphql';
import { AppResolver } from './graphql/resolver';

const GQLModule = process.env.FEDERATED
  ? GraphQLFederationModule
  : GraphQLModule;

@Module({
  imports: [
    GQLModule.forRootAsync({
      useFactory: async (): Promise<GqlModuleOptions> => ({
        autoSchemaFile: true,
        engine: false,
      }),
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}
