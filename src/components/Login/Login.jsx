import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FromsControl";
import { requairedField } from "../utils/validators";

const LoginForm = (props) => {
  // console.log(props)
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="login"
          name="login"
          component={Input}
          validate={[requairedField]}
        />
      </div>
      <div>
        <Field
          type="text"
          placeholder="password"
          name="password"
          component={Input}
          validate={[requairedField]}
        />
      </div>
      <div>
        <Field
          id="remember"
          type="checkbox"
          component={Input}
          name="remember"
        />
        <label htmlFor="remember">remember me</label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
