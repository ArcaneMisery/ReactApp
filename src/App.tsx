import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './login-form';
import ToDoListComponent from './layout/general/todo-list/todo-list.component';

function App() {
  const [form, setForm] = useState({
    login: "",
    password: ""
  });
  const handleForm = (formValue: {controlName: string, value: string}) => {
    setForm({...form, [formValue.controlName]: formValue.value});
  };
  return (
  <>
    <div>
      <label>Login</label>
      <span>{form.login}</span>
      <label>Password</label>
      <span>{form.password}</span>
    </div>
    <LoginForm handleForm={handleForm} form={form} />
    <ToDoListComponent/>
    
  </>
  );
}

export default App;
