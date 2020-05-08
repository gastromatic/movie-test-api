import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, UserModel } from "../models";

interface RegisterResponse {
  _id: String;
  username: String;
}

interface LoginResponse {
  token: String;
}

export async function register(_: void, args: any): Promise<RegisterResponse> {
  const { username, password } = args;
  const existingUser: number = await UserModel.countDocuments({ username });
  if (existingUser) {
    throw new Error("Username already used!");
  }
  const hashedPassword: String = await bcrypt.hash(password, 10);
  const user: User = new UserModel({
    username,
    password: hashedPassword,
  });
  await user.save();
  return {
    _id: user._id,
    username: user.username,
  };
}

export async function login(_: void, args: any): Promise<LoginResponse> {
  const { username, password } = args;
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new Error("Invalid login!");
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    throw new Error("Invalid login!");
  }
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    "secret",
  );
  return {
    token,
  };
}
