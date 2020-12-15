import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {
 
  // let state = props.store.getState().profilePage;

  return (
    <article>
    <ProfileInfo></ProfileInfo>
    <MyPostsContainer ></MyPostsContainer>
    
  </article>
  );
}
// profile={state.profileData}
// dispatch={props.store.dispatch} postsData={state.postsData} newPostText={state.newPostText}
export default Profile;
