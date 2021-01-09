import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  newPostTextActionCreator,
  setUserProfile,
} from "../../redux/profile-reduce";
import MyPosts from "./MyPosts/MyPosts";
// import MyPosts from "./MyPosts/MyPosts";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import * as axios from 'axios'
import { withRouter } from "react-router-dom";



class ProfileClass extends React.Component {
  componentDidMount() {
   let userId = this.props.match.params.userId
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((Response) => {
      this.props.setUserProfile(Response.data);
      console.log(Response.data)
    });
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
  };
};
let mapDispatchToProps = {
  addPostActionCreator,
  newPostTextActionCreator,
  setUserProfile,
};

let WithUrlDataContainerComponent = withRouter(ProfileClass)

let ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);


// profile={state.profileData}
// dispatch={props.store.dispatch} postsData={state.postsData} newPostText={state.newPostText}
export default ProfileContainer;
