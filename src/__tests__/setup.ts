import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export interface TestMongoConn {
  mongod: MongoMemoryServer;
  db: mongoose.Connection;
}
async function getMongoConnection(): Promise<TestMongoConn> {
  const mongod = new MongoMemoryServer();
  const url = await mongod.getConnectionString();
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return {
    db: mongoose.connection,
    mongod,
  };
}

export async function beforeEach() {
  return await getMongoConnection();
}

export async function afterEach({ db, mongod }: TestMongoConn) {
  await db.close();
  await mongod.stop();
}
