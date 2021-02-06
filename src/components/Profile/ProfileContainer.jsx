import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  changeStatus,
  getProfileThunkCreator,
  newPostTextActionCreator,
} from "../../redux/profile-reduce";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { Redirect, withRouter } from "react-router-dom";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import { compose } from "redux";




class ProfileClass extends React.Component {

  componentDidMount() {
   let userId = this.props.match.params.userId
   if(!userId) {
     userId = this.props.idAuth
   }
   if(userId !== null) {
    this.props.getProfileThunkCreator(userId)
   }
  }

  render() {

    return (
      <article>
        <ProfileInfo changeStatus={this.props.changeStatus} profile={this.props.profile} status={this.props.status}></ProfileInfo>
        <MyPosts {...this.props}></MyPosts>
      </article>
    );
  }
}

let AuthRedireactComponent = WithAuthRedirect(ProfileClass)


// (props) => {
//   if(!props.isAuth) return <Redirect to={'/login'}></Redirect>
//   return <ProfileClass {...props}></ProfileClass>
// }


let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profileData,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData,
    idAuth: state.auth.id,
    status: state.profilePage.status
  };
};



let mapDispatchToProps = {
  addPostActionCreator,
  newPostTextActionCreator,
  getProfileThunkCreator,
  changeStatus
};

let WithUrlDataContainerComponent = withRouter(AuthRedireactComponent)

let ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);


export default compose( connect(
  mapStateToProps,
  mapDispatchToProps
),withRouter,WithAuthRedirect)(ProfileClass);
