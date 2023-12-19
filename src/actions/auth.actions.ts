export const LOGIN_VK_REQUEST = "LOGIN_VK_REQUEST";
export const LOGIN_VK_SUCCESS = "LOGIN_VK_SUCCESS";
export const LOGIN_VK_FAIL = "LOGIN_VK_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function handleLogin(credentials: {login: string, password: string}) {
    return function(dispatch: any) {
        dispatch({
            type: LOGIN_REQUEST,
            payload: credentials
        });
        



        dispatch({
            type: LOGIN_SUCCESS,
            payload: credentials
        });
        dispatch({
            type: LOGIN_FAIL,
            payload: credentials
        })
    }
}



export function handleVKLogin() {
    return function (dispatch: any) {
      dispatch({
        type: LOGIN_VK_REQUEST
      });

    //eslint-disable-next-line no-undef
      (window as any).Auth.login((r: any) => {
        if (r.session) {
          const username = r.session.user.first_name;

          dispatch({
            type: LOGIN_VK_SUCCESS,
            payload: username
          });
        } else {
          dispatch({
            type: LOGIN_VK_FAIL,
            error: true,
            payload: new Error("Ошибка авторизации")
          });
        }
      }, 4);
    } 
}