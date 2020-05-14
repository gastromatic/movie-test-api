import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as setup from "../../__tests__/setup";
import { UserModel } from "../../models";
import { UserInfo } from "../../types";
import { register, login } from "../auth";

let testMongo: setup.TestMongoConn;

beforeEach(async () => {
  testMongo = await setup.beforeEach();
});

afterEach(() => setup.afterEach(testMongo));

describe("Test register", () => {
  it("should create new user object for successful registration", async () => {
    const response = await register(undefined, {
      username: "johndoe",
      password: "test",
    });
    expect(response.username).toEqual("johndoe");

    const user = await UserModel.findOne({ _id: response.id });
    expect(user).toBeDefined();
  });

  it("should throw error if registering with already used username", async () => {
    const user = new UserModel({
      username: "johndoe",
      password: "unencryptedPassword",
    });
    await user.save();

    let error;
    try {
      await register(undefined, {
        username: "johndoe",
        password: "test",
      });
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(new Error("Username already used!"));
  });
});

describe("Test login", () => {
  it("should throw error if user for username does not exist", async () => {
    let error;
    try {
      await login(undefined, {
        username: "johndoe",
        password: "test",
      });
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(new Error("Invalid login!"));
  });

  it("should throw error if password is not invalid", async () => {
    const user = new UserModel({
      username: "johndoe",
      password: await bcrypt.hash("test", 10),
    });
    await user.save();

    let error;
    try {
      await login(undefined, {
        username: "johndoe",
        password: "test2",
      });
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(new Error("Invalid login!"));
  });

  it("should login user and return jwt token", async () => {
    const user = new UserModel({
      username: "johndoe",
      password: await bcrypt.hash("test", 10),
    });
    await user.save();

    const response = await login(undefined, {
      username: "johndoe",
      password: "test",
    });
    const tokenPayload: UserInfo = jwt.decode(response.token) as UserInfo;
    expect(tokenPayload.username).toEqual("johndoe");
  });
});
