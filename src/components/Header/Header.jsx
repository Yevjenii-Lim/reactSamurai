import React from "react";
import s from './Header.module.css'

function Header(props) {
  // debugger
  let state = props.logo.getState()

  return (
    <header className={s.header}>
      <img alt="background" src={state.header.logo}></img>
    </header>
  );
}

export default Header;
