const typeDef = `
    type User {
        id: ID!
        username: String!
    }

    extend type Query {
        currentUser: User!
    }

    type LoginResponse {
        token: String
        user: User
    }

    extend type Mutation {
        register(username: String!, password: String!): User!
        login(username: String!, password: String!): LoginResponse!
    }    
`;
export default typeDef;
