import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { FormControlCreator } from "../common/FromsControl";
// import { Input } from "../common/FromsControl";
import { requairedField } from "../utils/validators";
import s from './../common/FromsControl.module.css'

let Input = FormControlCreator('input')

const LoginForm = (props) => {
//   console.log(props.error)
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="email"
          name="email"
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
       { props.error && <div className={s.errorSummary}>
            {props.error}
        </div>
        }
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
    props.loginThunkCreator(formData.email, formData.password, formData.remember)
  };
  if(props.isAuth) {
      return <Redirect to='/profile'></Redirect>
  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login)
;
