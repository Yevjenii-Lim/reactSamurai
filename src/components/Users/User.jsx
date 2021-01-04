import React from "react";
import styless from "./user.module.css";
import userPhoto from '../../assets/images/avatar.png';

let User = (props) => {
//   debugger
  return (
    <div key={props.id}>
      <span>
        <div>
          <img src={props.photos.small || userPhoto} className={styless.avatar} alt="avatar" />
        </div>
        <div>
          {props.followed ? (
            <button onClick={() => props.unfollow(props.id)}>Follow</button>
          ) : (
            <button onClick={() => props.follow(props.id)}>Unfollow</button>
          )}
        </div>
      </span>
      <span>
        <div>{props.fullname}</div>
        <div>{props.status}</div>
      </span>
      <span>
        {/* <div>{props.location.city}</div> */}
        {/* <div>{props.location.country}</div> */}
      </span>
    </div>
  );
};

export default User;
