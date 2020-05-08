import { currentUser, register, login } from "./auth";

const resolverMap = {
  Query: {
    currentUser,
  },
  Mutation: {
    login,
    register,
  },
};

export default resolverMap;
