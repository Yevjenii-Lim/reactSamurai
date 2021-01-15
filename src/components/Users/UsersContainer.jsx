import * as axios from "axios";
import { connect } from "react-redux";
import {
  follow,
  setPage,
  setTotalUsersCount,
  setUsers,
  unfollow,
  toggleIsFetching,
  toggleFollowingProgress
} from "../../redux/users-reducer";
import Users from "./Users";
import React from 'react';
// import s from './user.module.css'
import Preloader from "../common/Preloader";
import { getUsersApi } from "../../redux/api/api";


class UsersAPIComponent extends React.Component {
  componentDidMount() {
   
    // console.log(this.props.isFetching)
    this.props.toggleIsFetching(true)
    getUsersApi(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleIsFetching(false)
      });
  }
  // getUsers = () => {
  //   axios
  //     .get("https://social-network.samuraijs.com/api/1.0/users?page=2")
  //     .then((Response) => this.props.setUsers(Response.data.items));
  // };
  onPageChenged = (page) => {
    this.props.setPage(page);
    this.props.toggleIsFetching(true)
    getUsersApi(page, this.props.pageSize).then((data) => {
        this.props.setUsers(data.items)
        this.props.toggleIsFetching(false)
       
      });
  };
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
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        getUsers={this.getUsers}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
      ></Users>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
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
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
}

let UsersContainer = connect(
  mapStateToProps,
  mapObj
)(UsersAPIComponent);

export default UsersContainer;
