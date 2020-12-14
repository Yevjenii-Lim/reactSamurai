import React from "react";
// import MyPosts from "./MyPosts/MyPosts";
import MyPostsContaiiner from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {
 
  let state = props.store.getState().profilePage;

  return (
    <article>
    <ProfileInfo profile={state.profileData}></ProfileInfo>
    <MyPostsContaiiner dispatch={props.store.dispatch} postsData={state.postsData} newPostText={state.newPostText}></MyPostsContaiiner>
    
  </article>
  );
}

export default Profile;
