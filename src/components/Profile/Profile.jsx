import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {

  return (
    <article>
    <ProfileInfo></ProfileInfo>
    <MyPosts updateNewPost={props.updateNewPost} addPost={props.addPost} newPost={props.newPost} postsData={props.posts}></MyPosts>
    
  </article>
  );
}

export default Profile;
