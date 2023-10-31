import TextBoxComponent from "./shared/app-text-box.component";

function LoginForm(props: {handleForm: any, form: {login: string, password: string}}) {
  return (
    <div className="App">
        <div className="sign-block">
          <TextBoxComponent innerLabel={"Login"} value={props.form.login} handleValue={props.handleForm} controlName={"login"} />
          <TextBoxComponent innerLabel={"Password"} value={props.form.password} handleValue={props.handleForm} controlName={"password"} />
        </div>
    </div>
  );
}

export default LoginForm;
