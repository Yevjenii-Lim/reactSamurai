import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './UsersClass';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer