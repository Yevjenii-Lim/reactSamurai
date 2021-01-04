import React from "react";
import {NavLink} from 'react-router-dom'
import FriendsList from "./Friends/FriendsList";
import clasess from './Nav.module.css'

function Nav(props) {

// let state = props.friends.getState().friendsPage
// debugger
  return (
    <nav className={clasess.nav}>
      
        <ul>
          <li ><NavLink className={clasess.item} activeClassName={clasess.active} to="/profile">Profile</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/dialogs">Messages</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/news">News</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/photo">Photo</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/about">About</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/users">Users</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/clock">Clock</NavLink></li>
        </ul>
        <FriendsList ></FriendsList>
      </nav>
  );
}

export default Nav;
