// import React from "react";
// import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";
// import Message from './Message/Message'
import {changeMessageActionCreator,sendMessageActionCreator,} from "../../redux/messages-reduce";

import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    dialogData: state.messagesPage.dialogData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: (text) => { dispatch(sendMessageActionCreator(text, 1)) ;},

    changeMessage: (text) =>{ dispatch(changeMessageActionCreator(text, 1)) ;},
    
  }
}


let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//  <Dialogs dialogData={state.dialogData} newMessageText={state.newMessageText} messagesData={state.messagesData} sendMessage={sendMessage} changeMessage={changeMessage}></Dialogs>

export default DialogsContainer;
