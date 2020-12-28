import React from "react";
import { connect } from "react-redux";
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
    </header>
  );
}

let mapStateToProps = (state) => {
  return {
    logo: state.header.logo,

  }
}

let HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
