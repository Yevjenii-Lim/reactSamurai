import Header from "./Header";
import { connect } from "react-redux";
import React from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profile-reduce";
import { getAuthApi, getProfileApi } from "../../redux/api/api";

class HeaderClass extends React.Component {
  componentDidMount() {
    getAuthApi().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
        getProfileApi(data.data.id).then((data) =>
          this.props.setUserProfile(data)
        );
      }
    });
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
})(HeaderClass);

export default HeaderContainer;
