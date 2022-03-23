import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

const ApolloServer = (props) => {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloServer;
