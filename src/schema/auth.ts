const typeDef = `
    type User {
        id: ID!
        username: String!
    }

    type Query {
        currentUser: User!
    }

    type LoginResponse {
        token: String
        user: User
    }

    type Mutation {
        register(username: String!, password: String!): User!
        login(username: String!, password: String!): LoginResponse!
    }    
`;
export default typeDef;
