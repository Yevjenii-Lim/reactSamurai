import Header from "./Header";
import { connect } from "react-redux";
import React from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profile-reduce";
import { getAuthApi, getProfileApi } from "../../redux/api/api";
import { setHeaderThunkCreator } from "../../redux/header-reducer";

class HeaderClass extends React.Component {
  componentDidMount() {
    this.props.setHeaderThunkCreator()
  }

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
  setHeaderThunkCreator
})(HeaderClass);

export default HeaderContainer;
