export interface RegisterResponse extends UserInfo {}

export interface LoginResponse {
  token: String;
}

export interface UserInfo {
  id: String;
  username: String;
}

export interface Context {
  userInfo: UserInfo;
}
