import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addPostActionCreator } from "../../../redux/profile-reduce";
import { FormControlCreator } from "../../common/FromsControl";
import Preloader from "../../common/Preloader";
// import { TextArea } from "../../common/FromsControl";
import { maxLengthCreator, requairedField } from "../../utils/validators";
// import { addPostActionCreator, newPostTextActionCreator } from "../../../redux/profile-reduce";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength30 = maxLengthCreator(10);
let TextArea = FormControlCreator("textarea");
const PostForm = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          component={TextArea}
          placeholder="post"
          name="post"
          validate={[requairedField, maxLength30]}
        ></Field>
      </div>
      <div>
        <button className={s.add_post__button}>Add</button>
      </div>
    </form>
  );
};

let PostReduxForm = reduxForm({ form: "new Post" })(PostForm);
window.props = [];

// class MyPosts extends React.Component {
  
//   // this.props.push(props);
// componentDidUpdate(prevProps, prevState) {
//   console.log('update')
// }

//   onSubmit = (value) => {
//     // console.log(this.props);
//     this.props.addPostActionCreator(value.post);
//   };


//   render() {

//    let postElemtnts = this.props.posts.map((p, index) => (
//       <Post message={p.message} key={p.id} like={p.like}></Post>
//     ));
//     window.props.push(this.props)
//     // console.log(this.postElemtnts)
//      console.log('rende')
//     return (
//       <div className={s.add_post}>
//       <PostReduxForm onSubmit={this.onSubmit}></PostReduxForm>

//       <h3>My posts</h3>
//       {postElemtnts}
//     </div>
//     )
//   }
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData
  }
}

let MyPosts = React.memo(props => {
  // debugger
  // console.log("render");
  window.props.push(props);
  let postElemtnts = props.posts.map((p, index) => (
    <Post message={p.message} key={index} like={p.like}></Post>
  ));

  let onSubmit = (value) => {
    props.addPostActionCreator(value.post);
  };

  return (
    <div className={s.add_post}>
    <PostReduxForm onSubmit={onSubmit}></PostReduxForm>

    <h3>My posts</h3>
    {postElemtnts}
  </div>
  );
})

// connect(mapStateToProps, {addPostActionCreator})(MyPosts) 

export default MyPosts;
