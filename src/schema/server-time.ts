const typeDef = `
    type ServerTimeResponse {
        secondsSince1970: Int
    }

    extend type Query {
        serverTime: ServerTimeResponse!
    }    
`;
export default typeDef;
