import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  changeStatus,
  getProfileThunkCreator,
  getStatusThunkCreator,
  newPostTextActionCreator,
  updateStatusThunkCreator,
} from "../../redux/profile-reduce";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { Redirect, withRouter } from "react-router-dom";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import { compose } from "redux";

class ProfileClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    
    if (!userId) {
      userId = this.props.idAuth;
      // console.log(userId)
      if(!userId) {
        this.props.history.push('/login')
      }
    }
    if (userId !== null) {
     
      this.props.getProfileThunkCreator(userId);
      this.props.getStatusThunkCreator(userId);
    }
  }

  render() {
// console.log(this.props)
    return (
      <article>
        <ProfileInfo
          changeStatus={this.props.changeStatus}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunkCreator}
        ></ProfileInfo>
        <MyPosts 
        addPostActionCreator={this.props.addPostActionCreator}
        posts={this.props.posts}
        ></MyPosts>
      </article>
    );
  }
}

let AuthRedireactComponent = WithAuthRedirect(ProfileClass);

// (props) => {
//   if(!props.isAuth) return <Redirect to={'/login'}></Redirect>
//   return <ProfileClass {...props}></ProfileClass>
// }

let mapStateToProps = (state) => {
  // console.log('map state to props')
  return {
    profile: state.profilePage.profileData,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postsData,
    idAuth: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};

let mapDispatchToProps = {
  addPostActionCreator,
  newPostTextActionCreator,
  getProfileThunkCreator,
  changeStatus,
  getStatusThunkCreator,
  updateStatusThunkCreator,
};

let WithUrlDataContainerComponent = withRouter(AuthRedireactComponent);


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  
)(ProfileClass);
