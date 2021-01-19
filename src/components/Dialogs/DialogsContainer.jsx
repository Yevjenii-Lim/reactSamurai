// import React from "react";
// import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";
// import Message from './Message/Message'
import {changeMessageActionCreator,sendMessageActionCreator,} from "../../redux/messages-reduce";

import { connect } from "react-redux";
import WithAuthRedirect from "../HOC/WithAuthRedirect";


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

let AuthRedireactComponent = WithAuthRedirect(Dialogs)

// AuthRedireactComponent = connect(mapStateToPropsForRedirect)(AuthRedireactComponent)

// (props) => {
//   if(!props.isAuth) return <Redirect to={'/login'}></Redirect>
//   return <Dialogs {...props}></Dialogs>
// }


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedireactComponent)
//  <Dialogs dialogData={state.dialogData} newMessageText={state.newMessageText} messagesData={state.messagesData} sendMessage={sendMessage} changeMessage={changeMessage}></Dialogs>

export default DialogsContainer;
