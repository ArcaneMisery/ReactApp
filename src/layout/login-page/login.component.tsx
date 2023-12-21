import { useEffect, useState } from "react";
import LoginForm from "../../shared/login-form/login-form.component";
import "./login.component.scss";
import { handleLogin } from "../../actions/auth.actions";
import { UserCredentials } from "../../core-module/models/user-models";
import { connect } from "react-redux";
import { AuthStateModel } from "../../reducers/auth.reducer";
import { useNavigate } from "react-router-dom";


function LoginComponent(props: any) {
  const navigate = useNavigate();
  const { authState, handleLogin }: {authState: AuthStateModel, handleLogin: any} = props;

  const [form, setForm] = useState({
    login: "",
    password: ""
  });

  useEffect(() => {
    if(authState.isLoggedIn) {
      navigate("/");
    }
  }, [authState.isLoggedIn, navigate])

  const handleForm = (formValue: {controlName: string, value: string}) => {
    setForm({...form, [formValue.controlName]: formValue.value});
  };

  const handleUser = (userPass: {login: string, password: string}) => {
      handleLogin(userPass);
  }

  return (
    <div className="content-wrapper">
      <LoginForm handleForm={handleForm} handleUser={handleUser} form={form} isPassOrLoginInvalid={authState.isLoginOrPassInvalid} />
    </div>
  );
}

const MapStateToProps = (store: any) => {
  return {
    authState: store.authReducer,
  }
}

const MapDispatchToProps = (dispatch: any) => {
  return {
    handleLogin: (credentials: UserCredentials) => dispatch(handleLogin(credentials))
  }
}

export default connect(
  MapStateToProps, 
  MapDispatchToProps
  ) (LoginComponent);