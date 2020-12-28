import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './Dialog/Dialog'
import Message from './Message/Message'
// import { changeMessageActionCreator, sendMessageActionCreator } from "../../redux/messages-reduce";




function Dialogs(props) {

  let newDialogData = props.dialogData.map(d => {
    return (<DialogItem name={d.name} key={d.id} id ={d.id} avatar={d.avatar}></DialogItem>)
  })

  let messageItems = props.messagesData.map(m => m.message.map((item,index) => <Message key={index} style={s.message} avatar={m.avatar} message={item} id={m.id}></Message>))

  let newMessage = React.createRef()

  let sendMessage = () => {
    let text = newMessage.current.value
    props.sendMessage(text, 1)
  }
  let changeMessage = (event) => {
    let text = event.target.value
    props.changeMessage(text, 1)
  }

  return (
    <div className={s.wrap}>
        <div className={s.dialogs}>
              <ul>
                {newDialogData}
              </ul>
        </div>
        <div className={s.messages}>
              {messageItems}
        </div>
        <div className={s.formSend}>
           <input value={props.newMessageText} onChange={changeMessage} ref={newMessage} className={s.input} type='text'></input>
            <button onClick={sendMessage}>Send it</button>
        </div>
       
    </div>
  );
}

export default Dialogs;
