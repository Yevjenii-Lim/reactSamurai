import React from "react";
// import s from './Dialogs.module.css';
import Dialogs from './Dialogs'
// import Message from './Message/Message'
import { changeMessageActionCreator, sendMessageActionCreator } from "../../redux/messages-reduce";
import StoreContext from "../../StoreContext";


function DialogsContainer(props) {

// let state = props.store.getState().messagesPage

  return (
    <StoreContext.Consumer> 
      {
      (store) => {

        let sendMessage = (text) => {
         store.dispatch(sendMessageActionCreator(text, 1))
        }
        let changeMessage = (text) => {
          store.dispatch(changeMessageActionCreator(text, 1))
        }
      


        return (
          
          <Dialogs dialogData={store.getState().messagesPage.dialogData} newMessageText={store.getState().messagesPage.newMessageText} messagesData={store.getState().messagesPage.messagesData} sendMessage={sendMessage} changeMessage={changeMessage}></Dialogs>
        )
      }
      
      }
    </StoreContext.Consumer>
  );
}


//  <Dialogs dialogData={state.dialogData} newMessageText={state.newMessageText} messagesData={state.messagesData} sendMessage={sendMessage} changeMessage={changeMessage}></Dialogs>

export default DialogsContainer;
