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
// console.log(props.login)
// let arr = [1,1,4,0,1,1,12,32,2]
// let newArr = arr.filter(id => id !== 1 )
// console.log(newArr)
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
