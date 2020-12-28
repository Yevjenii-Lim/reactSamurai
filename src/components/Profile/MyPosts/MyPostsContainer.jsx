import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
// import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData,
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    addPost: () => {dispatch(addPostActionCreator())},
    updateNewPostText: (text) => {dispatch(newPostTextActionCreator(text))}
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

//  <MyPosts updateNewPostText={changer} newPostText={props.newPostText} addPost={addPost} posts={props.postsData}></MyPosts> 

export default MyPostsContainer;
