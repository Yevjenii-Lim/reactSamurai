import Header from "./Header";
import { connect } from "react-redux";
import React from "react";
import { logoutThunkCreator, setAuthUserData } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profile-reduce";
import { getAuthApi, getProfileApi } from "../../redux/api/api";
import { setHeaderThunkCreator } from "../../redux/header-reducer";

class HeaderClass extends React.Component {


  render() {
    return <Header {...this.props}></Header>;
  }
}

let mapStateToProps = (state) => {
  return {
    logo: state.header.logo,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};


let HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  setUserProfile,
  setHeaderThunkCreator,
  logoutThunkCreator
})(HeaderClass);

export default HeaderContainer;
