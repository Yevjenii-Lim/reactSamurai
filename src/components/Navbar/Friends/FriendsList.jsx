import React from "react";
import Friend from "./Friend";
import s from "./FriendsList.module.css";

const FriendsList = (props) => {

  let friends = props.friends.map((f, index) => (
    <Friend src={f.src} key={index} name={f.name}></Friend>
  ));
  return (
    <div className={s.wrap}>
      <h2>Friends:</h2>
      {friends}
    </div>
  );
};

export default FriendsList;
