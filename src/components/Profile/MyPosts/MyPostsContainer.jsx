import React from "react";
import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


function MyPostsContainer(props) {
  // debugger



  return ( 
      <StoreContext.Consumer> 
        {
        (store) =>  {
         
            let addPost = () => {
              store.dispatch(addPostActionCreator());
              
            };
            let changer = (text) => {
              store.dispatch(newPostTextActionCreator(text))
             
            }

           return  <MyPosts updateNewPostText={changer} newPostText={store.getState().profilePage.newPostText} addPost={addPost} posts={store.getState().profilePage.postsData}></MyPosts>
        }
      
      }
      </StoreContext.Consumer>
      )
  
  }

//  <MyPosts updateNewPostText={changer} newPostText={props.newPostText} addPost={addPost} posts={props.postsData}></MyPosts> 

export default MyPostsContainer;
