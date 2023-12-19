import { LOGIN_REQUEST } from "../actions/auth.actions";


const initialState = {
  userInfo: null
};
  
  export function authReducer(state = initialState, action: {type: string, payload: any}) {
    switch(action.type) {
      case LOGIN_REQUEST: {
        
      }
    }
    return state;
  }