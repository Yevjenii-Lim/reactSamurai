import React from "react";
import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {
  // debugger

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    
  };
  let changer = (text) => {

    props.dispatch(newPostTextActionCreator(text))
   
  }

  return (
    <MyPosts updateNewPostText={changer} addPost={addPost} posts={props.postsData}></MyPosts>
  );
}

export default MyPostsContainer;
