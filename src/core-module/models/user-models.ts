export interface UserInfo {
    userName: string;
    userAuthority: string;
}

  export interface UserProp {
    isLoggedIn: boolean;
    setIsLoggedIn: any; 
    userInfo: UserInfo | null;
}