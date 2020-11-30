import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={s.add_post}>
      <input className={s.add_post__input} type="text"></input>
      <button className={s.add_post__button}>Add</button>
        <Post message='hrllo' like='12'></Post>
        <Post message='HOw you doing' like='1'></Post>

    </div>
  );
}

export default MyPosts;
