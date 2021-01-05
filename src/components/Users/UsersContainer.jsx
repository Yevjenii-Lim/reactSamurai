import * as axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  setPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  toggleIsFetchingAC
} from "../../redux/users-reducer";
import Users from "./Users";
import React from 'react';
import s from './user.module.css'


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // console.log(this.props.isFetching)
    this.props.isFetchingToggle(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}count=${this.props.pageSize}`
      )
      .then((Response) => {
        this.props.setUsers(Response.data.items);
        this.props.setTotalUsers(Response.data.totalCount);
        this.props.isFetchingToggle(false)
      });
  }
  getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?page=2")
      .then((Response) => this.props.setUsers(Response.data.items));
  };
  onPageChenged = (page) => {
    this.props.setPage(page);
    this.props.isFetchingToggle(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((Response) => {
        this.props.setUsers(Response.data.items)
        this.props.isFetchingToggle(false)
      });
  };
  render() {
    return (
        <>
        {this.props.isFetching == true ? <div className={s.ldsCircle}><div></div></div> : null}
      <Users
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        onPageChenged={this.onPageChenged}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        getUsers={this.getUsers}
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
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setPage: (page) => dispatch(setPageAC(page)),
    setTotalUsers: (num) => dispatch(setTotalUsersCountAC(num)),
    isFetchingToggle: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
  };
};

let UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
