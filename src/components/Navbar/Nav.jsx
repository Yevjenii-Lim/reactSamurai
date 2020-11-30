import React from "react";
import clasess from './Nav.module.css'
function Nav() {
  return (
    <nav className={clasess.nav}>
        <ul>
          <li ><a className={clasess.item} href="/profile">Profile</a></li>
          <li><a href="/dialogs">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Photo</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
  );
}

export default Nav;
