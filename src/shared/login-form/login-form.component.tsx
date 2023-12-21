import TextBoxComponent from "../app-text-box/app-text-box.component";
import "./login-form.component.scss";
import { useState } from "react";
import { UserCredentials } from "../../core-module/models/user-models";

function LoginForm(props: { handleForm: any, handleUser: any, form: UserCredentials, isPassOrLoginInvalid: boolean }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const handleSubmit = (form: UserCredentials) => {
    setIsFirstLoad(false);
    props.handleUser(form);
  }

  return (
    <div className="sign-form">  
      <h2>Login in your account</h2>
        <div className="sign-block">
          <TextBoxComponent innerLabel={"Login"} value={props.form.login} handleValue={props.handleForm} controlName={"login"} />
          <TextBoxComponent innerLabel={"Password"} value={props.form.password} handleValue={props.handleForm} controlName={"password"} />
        </div>
        <footer>
          <button onClick={() => {handleSubmit(props.form)}} type="button">
              Submit
          </button>
        </footer>
        {(props.isPassOrLoginInvalid && !isFirstLoad) && (
          <div>Incorrect login or password</div>
        )}
    </div>
  );
}

export default LoginForm;

