import React from "react";
import {NavLink} from 'react-router-dom'
import FriendsList from "./Friends/FriendsList";
import clasess from './Nav.module.css'
function Nav(props) {

  return (
    <nav className={clasess.nav}>
      
        <ul>
          <li ><NavLink className={clasess.item} activeClassName={clasess.active} to="/profile">Profile</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/dialogs">Messages</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/news">News</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/photo">Photo</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/about">About</NavLink></li>
        </ul>
        <FriendsList friends={props.friends.friend}></FriendsList>
      </nav>
  );
}

export default Nav;
