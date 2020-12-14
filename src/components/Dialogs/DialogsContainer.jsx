import React from "react";
// import s from './Dialogs.module.css';
import Dialogs from './Dialogs'
// import Message from './Message/Message'
import { changeMessageActionCreator, sendMessageActionCreator } from "../../redux/messages-reduce";




function DialogsContainer(props) {
// debugger
let state = props.store.getState().messagesPage

  let sendMessage = (text) => {
    // let text = newMessage.current.value
    props.store.dispatch(sendMessageActionCreator(text, 1))
  }
  let changeMessage = (text) => {
    // let text = event.target.value
    props.store.dispatch(changeMessageActionCreator(text, 1))
  }

  return (
          <Dialogs dialogData={state.dialogData} newMessageText={state.newMessageText} messagesData={state.messagesData} sendMessage={sendMessage} changeMessage={changeMessage}></Dialogs>
  );
}

export default DialogsContainer;
