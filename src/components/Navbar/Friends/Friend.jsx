import React from "react";
import s from "./FriendsList.module.css";

const Friend = (props) => {
  return (
    <div className={s.friend__item}>
      <img src={props.src}></img>
      <p>{props.name}</p>
    </div>
  );
};

export default Friend;
