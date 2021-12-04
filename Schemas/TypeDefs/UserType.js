const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: () => ({
//     id: { type: GraphQLInt },
//     firstName: { type: GraphQLString },
//     lastName: { type: GraphQLString },
//     email: { type: GraphQLString },
//     password: { type: GraphQLString },
//   }),
// });

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    Name: { type: GraphQLString  },
    Allow: { type: GraphQLInt },
    Audit: { type: GraphQLInt },
    Block: { type: GraphQLInt },
    File: { type: GraphQLInt },
    Process: { type: GraphQLInt },
    Protocols: { type: GraphQLInt },
  }),
});

module.exports = UserType;
