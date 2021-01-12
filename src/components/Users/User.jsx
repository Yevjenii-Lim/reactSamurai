import React from "react";
import styless from "./user.module.css";
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from "react-router-dom";
import * as axios from "axios";



let User = (props) => {
  // debugger
  return (
    <div key={props.id}>
      <span>
        <div>
          <NavLink to={'/profile/'+ props.id}>
          <img src={props.photos.small || userPhoto} className={styless.avatar} alt="avatar" />
          </NavLink>
        </div>
        <div>
          {props.followed ? (
            <button onClick={() =>{ 
              axios.delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {withCredentials: true,
                headers: {
                  "API-KEY": "10c45fba-46b9-4d86-90c8-a324c2f4152b"
                }
                }
              )
              .then((Response) => {
                if(Response.data.resultCode === 0) {
                  props.unfollow(props.id)
          
                }
              });  
              }}>unfollow</button>
              
          ) : (
            <button onClick={() => {
              axios.post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},
                {withCredentials: true,
                  headers: {
                    "API-KEY": "10c45fba-46b9-4d86-90c8-a324c2f4152b"
                  }
                }
              )
              .then((Response) => {
                if(Response.data.resultCode === 0) {
                  props.follow(props.id)
                }
              });  
            
              
            
            }}>foloow</button>
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
