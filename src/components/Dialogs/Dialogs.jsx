import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { FormControlCreator, TextArea } from "../common/FromsControl";
import { maxLengthCreator, requairedField } from "../utils/validators";
// import { changeMessageActionCreator, sendMessageActionCreator } from "../../redux/messages-reduce";

const maxLength = maxLengthCreator(50)
let Input = FormControlCreator('input')

const DialogFrom = (props) => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <Field
        className={s.input}
        type="text"
        name="message"
        component={Input}
        validate={[requairedField, maxLength]}
      ></Field>
      <button>Send it</button>
    </form>
  );
};

let DialogFromRedux = reduxForm({ form: "dialog" })(DialogFrom);

function Dialogs(props) {
  // console.log(props.isAuth);
  let newDialogData = props.dialogData.map((d) => {
    return (
      <DialogItem
        name={d.name}
        key={d.id}
        id={d.id}
        avatar={d.avatar}
      ></DialogItem>
    );
  });

  let messageItems = props.messagesData.map((m) =>
    m.message.map((item, index) => (
      <Message
        key={index}
        style={s.message}
        avatar={m.avatar}
        message={item}
        id={m.id}
      ></Message>
    ))
  );

  let onSendMessage = (value) => {
    // console.log(value)
    props.sendMessage(value.message, 1);
  };

  if (!props.isAuth) return <Redirect to={"/login"}></Redirect>;

  return (
    <div className={s.wrap}>
      <div className={s.dialogs}>
        <ul>{newDialogData}</ul>
      </div>
      <div className={s.messages}>{messageItems}</div>
      <div className={s.formSend}>
        <DialogFromRedux onSubmit={onSendMessage}></DialogFromRedux>
      </div>
    </div>
  );
}

export default Dialogs;
