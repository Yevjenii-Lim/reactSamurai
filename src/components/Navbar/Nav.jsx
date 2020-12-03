import React from "react";
import {NavLink} from 'react-router-dom'
import clasess from './Nav.module.css'
function Nav() {
  return (
    <nav className={clasess.nav}>
      
        <ul>
          <li ><NavLink className={clasess.item} activeClassName={clasess.active} to="/profile">Profile</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/dialogs">Messages</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active}  to="/news">News</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/photo">Photo</NavLink></li>
          <li><NavLink className={clasess.item} activeClassName={clasess.active} to="/about">About</NavLink></li>
        </ul>
      </nav>
  );
}

export default Nav;
