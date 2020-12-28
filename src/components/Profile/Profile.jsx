import React from "react";
import { connect } from "react-redux";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {

  return (
    <article>
    <ProfileInfo profile={props.profile}></ProfileInfo>
    <MyPostsContainer ></MyPostsContainer>
  </article>
  );
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profileData,
  }
}


let ProfileContainer = connect(mapStateToProps)(Profile)
// profile={state.profileData}
// dispatch={props.store.dispatch} postsData={state.postsData} newPostText={state.newPostText}
export default ProfileContainer;
