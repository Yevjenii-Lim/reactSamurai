import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialog.module.css';



const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
  <li className={s.dialog}> <NavLink to={path}> <img src={props.avatar} className={s.dialogAvatar} alt=""/> {props.name}</NavLink></li>
  )
}



export default DialogItem;
