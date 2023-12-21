import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/auth.actions";
import { UserInfo } from "../core-module/models/user-models";

export interface AuthStateModel {
  isLoggedIn: boolean;
  userInfo: null | UserInfo;
  isLoginOrPassInvalid: boolean;
  pending: boolean;  
}

const initialState: AuthStateModel = {
  isLoggedIn: false,
  userInfo: null,
  isLoginOrPassInvalid: false,
  pending: false
};
  
  export function authReducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
      case LOGIN_REQUEST: return {
        ...state,
        pending: true
      }
      case LOGIN_SUCCESS: return {
        ...state,
        userInfo: action.payload,
        isLoggedIn: true,
        pending: false
      }
      case LOGIN_FAIL: return {
        ...state,
        userInfo: null,
        isLoggedIn: false,
        isLoginOrPassInvalid: true,
        pending: false
      }
    }
    return state;
  }