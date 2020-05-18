# NestjsEnumError

## Usage

Run `yarn start` and open `http://localhost:3333/graphql` and run the following query:

```
{
  getToken {
    token_type
  }
}

```

You should see that the `token_type` enum returns `BEARER`.

Now stop the server and run `yarn start:federated`. Repeat the above steps but note that it returns an error now.
