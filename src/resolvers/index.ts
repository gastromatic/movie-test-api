import { currentUser, register, login } from "./auth";
import { serverTime } from "./server-time";

const resolverMap = {
  Query: {
    currentUser,
    serverTime,
  },
  Mutation: {
    login,
    register,
  },
};

export default resolverMap;
