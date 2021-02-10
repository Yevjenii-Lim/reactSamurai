import { connect } from "react-redux";
import {
  // follow,
  setPage,
  // setTotalUsersCount,
  // setUsers,
  // unfollow,
  // toggleIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  getUnFollowThunkCreator,
  getFollowThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import React from 'react';
// import s from './user.module.css'
import Preloader from "../common/Preloader";
import { compose } from "redux";
import { getCurrentPage, getTotalUsers, getUsers, getPageSize, getIsFetching, getFollowingProgress } from "../../redux/users-selectors";



class UsersAPIComponent extends React.Component {
  componentDidMount() {
   
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
}
  onPageChenged = (page) => {
    this.props.setPage(page);
    this.props.getUsersThunkCreator(page, this.props.pageSize)
  }

  render() {
    return (
        <>
        {this.props.isFetching === true ? <Preloader></Preloader>: null}
      <Users
        followingProgress={this.props.followingProgress}
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        onPageChenged={this.onPageChenged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        getUsers={this.getUsers}
        getUnFollowThunkCreator={this.props.getUnFollowThunkCreator}
        getFollowThunkCreator={this.props.getFollowThunkCreator}
      ></Users>
      </>
    );
  }
}



let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setPage: (page) => dispatch(setPageAC(page)),
//     setTotalUsers: (num) => dispatch(setTotalUsersCountAC(num)),
//     isFetchingToggle: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//   };
// };



let mapObj = {
  setPage,
  toggleFollowingProgress,
  getUsersThunkCreator,
  getUnFollowThunkCreator,
  getFollowThunkCreator
}




export default compose(connect(
  mapStateToProps,
  mapObj
))(UsersAPIComponent);
