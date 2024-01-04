import TextBoxComponent from "../controls/app-text-box/app-text-box.component";
import "./login-form.component.scss";
import { useState } from "react";
import { UserCredentials } from "../../core-module/models/user-models";
import { useForm } from "react-hook-form";

const form = {
  login: "",
  password: ""
}

function LoginForm(props: { handleForm: any, handleUser: any, form: UserCredentials, isPassOrLoginInvalid: boolean }) {
  const { control, getValues, trigger, formState } = useForm<any>({
    defaultValues: form,
  });
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const {isValid} = formState;

  const handleSubmit = (form: UserCredentials) => {
    if(!isValid) {
      trigger();
      return;
    }
    setIsFirstLoad(false);
    props.handleUser(form);
  }

  return (
    <div className="sign-form">  
      <h2>Login in your account</h2>
        <div className="sign-block">
          <label>login</label>
          <TextBoxComponent control={control} rules={{ required: true }} name="login" />
          <label>password</label>
          <TextBoxComponent control={control} rules={{ required: true }} name="password" inputType="password" />
        </div>
        <footer>
          <button onClick={() => {handleSubmit(getValues())}} type="button">
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

