import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  getProfileThunkCreator,
  newPostTextActionCreator,
} from "../../redux/profile-reduce";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { withRouter } from "react-router-dom";




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
        <ProfileInfo profile={this.props.profile}></ProfileInfo>
        <MyPosts {...this.props}></MyPosts>
      </article>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profileData,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData,
    idAuth: state.auth.id
  };
};

let mapDispatchToProps = {
  addPostActionCreator,
  newPostTextActionCreator,
  getProfileThunkCreator
};

let WithUrlDataContainerComponent = withRouter(ProfileClass)

let ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);


// profile={state.profileData}
// dispatch={props.store.dispatch} postsData={state.postsData} newPostText={state.newPostText}
export default ProfileContainer;
