import React from "react";
import styless from "./user.module.css";
import userPhoto from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";


let User = (props) => {

  return (
    <div key={props.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + props.id}>
            <img
              src={props.photos.small || userPhoto}
              className={styless.avatar}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {props.followed ? (
            <button disabled={props.followingProgress.some(id => id === props.id)}
              onClick={() => {
                props.getUnFollowThunkCreator(props.id)
                // props.toggleFollowingProgress(true, props.id)
                // getUnfollowApi(props.id).then((data) => {
                //   if (data.resultCode === 0) {
                //     props.unfollow(props.id);
                //   }
                //   props.toggleFollowingProgress(false, props.id)
                // });
              }}
            >
              unfollow
            </button>
          ) : (
            <button disabled={props.followingProgress.some(id => id === props.id)}
              onClick={() => {
                props.getFollowThunkCreator(props.id)
              }}
            >
              foloow
            </button>
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
