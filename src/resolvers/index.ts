import { register, login } from "./auth";

const resolverMap = {
  Query: {},
  Mutation: {
    register,
    login,
  },
};

export default resolverMap;
