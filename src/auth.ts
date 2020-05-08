import jwt from "jsonwebtoken";
import { UserInfo } from "./types";

export function getUserInfo(bearerToken: string): UserInfo | null {
  const token = bearerToken.split(" ")[1];
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, "secret") as UserInfo;
  } catch {
    return null;
  }
}
