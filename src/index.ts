import { ApolloServer, gql } from "apollo-server";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

new ApolloServer({ typeDefs, resolvers }).listen(3000).then(() => {
  console.log("GraphQl AÜI running on port 3000.");
});
