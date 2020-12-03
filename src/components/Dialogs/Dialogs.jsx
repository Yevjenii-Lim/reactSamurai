import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './Dialog/Dialog'
import Message from './Message/Message'



function Dialogs(props) {

  let newDialogData = props.dialogs.map(d => {
    return (<DialogItem name={d.name} key={d.id} id ={d.id}></DialogItem>)
  })
  let messageItems = props.messages.map(m => <Message key={m.id} style={s.message} message={m.message} id={m.id}></Message>)


  return (
    <div className={s.wrap}>
        <div className={s.doalogs}>
              <ul>
                {newDialogData}
              </ul>
        </div>
        <div className={s.messages}>
              {messageItems}
        </div>
    </div>
  );
}

export default Dialogs;
