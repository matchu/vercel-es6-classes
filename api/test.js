const { ApolloServerBase } = require("apollo-server-core");
const gql = require("graphql-tag");

class ApolloServer extends ApolloServerBase {
  constructor(options) {
    super(options);
  }
}

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      foo: Boolean
    }
  `,
  resolvers: { Query: { foo: () => true } },
});

export default (req, res) => {
  res.status(200).send("Server object: " + server);
};
