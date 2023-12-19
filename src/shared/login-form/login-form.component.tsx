import TextBoxComponent from "../app-text-box/app-text-box.component";
import { Navigate } from "react-router-dom";
import "./login-form.component.scss";
import { useState } from "react";

function LoginForm(props: {setUserInfo: any, handleForm: any, form: {login: string, password: string}, setIsLoggedIn: any}) {
  const users = [
    {login: "testUser", password: "test", userInfo: {userName: "testUser", userAuthority: "user"}},
    {login: "admin", password: "admin", userInfo: {userName: "userAdmin", userAuthority: "admin"}},
  ];
  const [isPassAndLoginValid, setIsPassAndLoginValid] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [user, setUser] = useState<{userName: string, userAuthority: string}>();

  const handleUser = (userPass: {login: string, password: string}) => {
    setIsFirstLoad(false);
    const userFromList = users.find((user) => (user.login === userPass.login && user.password === userPass.password));
    if (!userFromList) {
      setIsPassAndLoginValid(false);
      return;
    }
    setIsPassAndLoginValid(true);
    localStorage.setItem("user", JSON.stringify(userFromList.userInfo));
    props.setIsLoggedIn(true);
    props.setUserInfo(userFromList.userInfo);
    setUser({
      ...userFromList.userInfo
    });
  }

  return (
    <div className="sign-form">
        <h2>Login in your account</h2>
        <div className="sign-block">
          <TextBoxComponent innerLabel={"Login"} value={props.form.login} handleValue={props.handleForm} controlName={"login"} />
          <TextBoxComponent innerLabel={"Password"} value={props.form.password} handleValue={props.handleForm} controlName={"password"} />
        </div>
        <footer>
          <button onClick={() => {handleUser(props.form)}} type="button">
              Submit
          </button>
        </footer>
        {(!isPassAndLoginValid && !isFirstLoad) && (
             <div>Incorrect login or password</div>
            )}
        {user && (
              <Navigate to="/"/>
            )}
    </div>
  );
}

export default LoginForm;

