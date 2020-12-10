import React from "react";
import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

  let postElemtnts = props.state.postsData.map((p, index) => (
    <Post message={p.message} key={index} like={p.like}></Post>
  ));
  let newPost = React.createRef();

  let addPost = () => {
    let text = newPost.current.value;
    props.dispatch(addPostActionCreator());
    
  };
  let changer = () => {
    let text = newPost.current.value;
    props.dispatch(newPostTextActionCreator(text))
   
  }

  return (
    <div className={s.add_post}>
      <div>
        <input
          value={props.newPost}
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
