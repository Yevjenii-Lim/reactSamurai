import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

// let localState = useState(false)
// console.log(localState)
let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)

let activateEditMode = () => {
  setEditMode(true)
}
useEffect(() => {
  // console.log('useEffect')
  setStatus(props.status)
}, [props.status])

let deactivateEditMode = () => {
  setEditMode(false)
  props.updateStatus(status)
}

let onChengeStatus =(value) => {
  setStatus(value)

  
}
// setEditMode(true)
  return (
    <>
      {editMode ? (
        <input
          autoFocus={true}
          onChange={(e) => onChengeStatus(e.target.value)}
          onBlur={deactivateEditMode}
          type="text"
          value={status}
        />
      ) : (
        <p onDoubleClick={activateEditMode}>
          {status || "no stat"}
        </p>
      )}

      <button>Publish</button>
    </>
  );
};

export default ProfileStatusWithHooks;
