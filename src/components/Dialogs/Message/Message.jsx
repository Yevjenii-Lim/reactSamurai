import React from "react";
import { NavLink, Route } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  
  return (
    <Route path={"/dialogs/" + props.id}>
      <div className={s.message}>
        <img src={props.avatar}></img>
        <p>{props.message}</p>
      </div>
   
    </Route>
  );
};

export default Message;
