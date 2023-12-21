export interface UserInfo {
    userName: string;
    userAuthority: string;
}

  export interface UserProp {
    isLoggedIn: boolean;
    userInfo: UserInfo | null;
}

export interface UserCredentials {
  login: string;
  password: string
}