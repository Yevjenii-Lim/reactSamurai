import React from "react";
// import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  // debugger
  let postElemtnts = props.posts.map((p, index) => (
    <Post message={p.message} key={index} like={p.like}></Post>
  ));
  let newPost = React.createRef();

  let addPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator());
    
  };
  let changer = () => {
    let text = newPost.current.value
    props.updateNewPostText(text)
   
  }

  return (
    <div className={s.add_post}>
      <div>
        <input
          value={props.newPostText}
          onChange={changer}
          ref={newPost}
          className={s.add_post__input}
          type="text"
        ></input>
      </div>
      <div>
        <button onClick={addPost} className={s.add_post__button}>
          Add
        </button>
      </div>

      <h3>My posts</h3>
      {postElemtnts}
    </div>
  );
}

export default MyPosts;
