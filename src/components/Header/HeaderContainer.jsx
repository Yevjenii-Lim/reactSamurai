import Header from "./Header";
import { connect } from "react-redux";
import React from 'react'
import * as axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderClass extends React.Component {
    componentDidMount() {
        axios.get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }
      )
      .then((Response) => {
          if(Response.data.resultCode === 0) {
              let {id, email, login} = Response.data.data
              this.props.setAuthUserData(id, email, login)
          }
        console.log(Response)
      });
    }

    render() {
   
        return (
            <Header {...this.props}></Header>
        )
    }
}

let mapStateToProps = (state) => {
  return {
    logo: state.header.logo,
    isAuth: state.auth.isAuth,
    login: state.auth.login
  };
};

let HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderClass);

export default HeaderContainer;
