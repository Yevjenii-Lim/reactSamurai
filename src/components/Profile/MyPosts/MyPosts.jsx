import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  
  
  let postElemtnts  = props.postsData.map((p,index) => <Post message={p.message} key={index} like={p.like}></Post>)

  return (
    <div className={s.add_post}>
      <div>
        <input className={s.add_post__input} type="text"></input>
      </div>
      <div>
        <button className={s.add_post__button}>Add</button>
      </div>
      
      <h3>My posts</h3>
        {postElemtnts}

    </div>
  );
}

export default MyPosts;
