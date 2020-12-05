import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './Dialog/Dialog'
import Message from './Message/Message'




function Dialogs(props) {

  let newDialogData = props.dialogs.map(d => {
    return (<DialogItem name={d.name} key={d.id} id ={d.id} avatar={d.avatar}></DialogItem>)
  })
  let messageItems = props.messages.map(m => <Message key={m.id} style={s.message} avatar={m.avatar} message={m.message} id={m.id}></Message>)

  let newMessage = React.createRef()

  let sendMessage = () => {
    console.log(newMessage.current.value)
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
           <input ref={newMessage} className={s.input} type='text'></input>
            <button onClick={sendMessage}>Send it</button>
        </div>
       
    </div>
  );
}

export default Dialogs;
