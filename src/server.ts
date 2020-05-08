import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { getUserInfo } from "./auth";
import typeDefs from "./schema";
import resolvers from "./resolvers";

mongoose
  .connect("mongodb://localhost:27017/movies", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB."))
  .then(() =>
    new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({
        userInfo: getUserInfo(req.headers.authorization || ""),
      }),
    }).listen(3000),
  )
  .then(() => {
    console.log("GraphQl API running on port 3000.");
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });
