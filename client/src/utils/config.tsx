import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';

const serverURL = import.meta.env.VITE_GRAPHQL_SERVER_URL;

const link = from([new HttpLink({ uri: serverURL })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
