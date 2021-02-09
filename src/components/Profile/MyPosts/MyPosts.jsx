import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControlCreator } from "../../common/FromsControl";
// import { TextArea } from "../../common/FromsControl";
import {  maxLengthCreator, requairedField } from "../../utils/validators";
// import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const maxLength30 = maxLengthCreator(10)
let TextArea = FormControlCreator('textarea')
const PostForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
       <Field
          // value={props.newPostText}
          // onChange={changer}
          // ref={newPost}
          // className={s.add_post__input}
          type="text"
          component={TextArea}
          placeholder="post"
          name="post"
          validate={[requairedField, maxLength30]}
        ></Field>
      </div>
      <div>
        <button className={s.add_post__button}>
          Add
        </button>
        </div>
    </form>
  )
}

let PostReduxForm = reduxForm({form: "new Post"})(PostForm)

function MyPosts(props) {
  // debugger
  let postElemtnts = props.posts.map((p, index) => (
    <Post message={p.message} key={index} like={p.like}></Post>
  ));



  let onSubmit = (value) => {
    props.addPostActionCreator(value.post)

  }

  return (
    <div className={s.add_post}>

      <PostReduxForm onSubmit={onSubmit}></PostReduxForm>

      <h3>My posts</h3>
      {postElemtnts}
    </div>
  );
}

export default MyPosts;
