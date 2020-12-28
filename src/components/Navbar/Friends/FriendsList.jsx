import React from "react";
import { connect } from "react-redux";
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

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friend,
  }
}

let FriendsListContainer = connect(mapStateToProps)(FriendsList)

export default FriendsListContainer;
