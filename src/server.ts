import mongoose from "mongoose";
import yargs from "yargs";
import { ApolloServer } from "apollo-server";
import { getUserInfo } from "./auth";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const args = yargs
  .option("mongo-uri", {
    describe: "Mongo URI",
    default: "mongodb://localhost:27017/movies",
    type: "string",
    group: "Mongo",
  }).argv;

console.log(args)

console.log(args["mongo-uri"]);

mongoose
  .connect(args["mongo-uri"], {
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
