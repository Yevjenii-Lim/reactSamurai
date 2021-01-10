import React from "react";

import { NavLink } from "react-router-dom";
// import header from "../../redux/header-reducer";
import s from "./Header.module.css";

// function Header(props) {
//   // debugger
//   let state = props.logo.getState();

//   return (
//     <header className={s.header}>
//       <img alt="background" src={state.header.logo}></img>
//     </header>
//   );
// }
function Header(props) {

  return (
    <header className={s.header}>
      <img alt="background" src={props.logo}></img>
      <div className={s.login}>
        <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login' }</NavLink>
      </div>
    </header>
  );
}

export default Header
