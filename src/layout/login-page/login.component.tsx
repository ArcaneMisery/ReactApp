import { useState } from "react";
import LoginForm from "../../shared/login-form/login-form.component";
import "./login.component.scss";


function LoginComponent(props: {setIsLoggedIn: any, setUserInfo: any}) {
  const [form, setForm] = useState({
    login: "",
    password: ""
  });
  const handleForm = (formValue: {controlName: string, value: string}) => {
    setForm({...form, [formValue.controlName]: formValue.value});
  };

  return (
    <div className="content-wrapper">
      <LoginForm setIsLoggedIn={props.setIsLoggedIn} handleForm={handleForm} form={form} setUserInfo={props.setUserInfo} />
    </div>
  );
}

export default LoginComponent;