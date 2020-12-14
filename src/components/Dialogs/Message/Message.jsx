import React from "react";
import { Route } from "react-router-dom";
import s from "./../Dialogs.module.css";
// import MessageItem from "./MessageItem";

const Message = (props) => {

  // let messages = props.message.map((m, index )=><MessageItem key={index} message={m}></MessageItem>)
  // console.log(messages)
  return (
    <Route path={"/dialogs/" + props.id}>
      <div className={s.message}>
        <img src={props.avatar}></img>
        <div>{props.message}</div>
      </div>
   
    </Route>
  );
};

export default Message;
