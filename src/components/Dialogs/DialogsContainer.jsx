// import React from "react";
// import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";
// import Message from './Message/Message'
import {changeMessageActionCreator,sendMessageActionCreator,} from "../../redux/messages-reduce";

import { connect } from "react-redux";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import { compose } from "redux";


// let mapStateToPropsForRedirect = (state) => {
//   return {
//     isAuth: state.auth.isAuth
//   }
// }

let mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
   
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: (text) => { dispatch(sendMessageActionCreator(text, 1)) ;},

    changeMessage: (text) =>{ dispatch(changeMessageActionCreator(text, 1)) ;},
    
  }
}





export default compose(connect(mapStateToProps, mapDispatchToProps) ,WithAuthRedirect)(Dialogs);
