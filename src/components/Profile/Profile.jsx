import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {
 
  return (
    <article>
    <ProfileInfo profile={props.state.profileData}></ProfileInfo>
    <MyPosts dispatch={props.dispatch} state={props.state}></MyPosts>
    
  </article>
  );
}

export default Profile;
