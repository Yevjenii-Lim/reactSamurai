import React from "react";
import Preloader from "../../common/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/avatar.png";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

function ProfileInfo(props) {

  if (!props.profile) {
    // console.log('asdsad')
    return <Preloader></Preloader>;
  }
  // console.log(props.status)
  // debugger
  return (
    <div className={s.content}>
      <img alt="background" src={props.profile.srcBg}></img>
      <div className={s.person}>
        <img
          className={s.person__image}
          alt="avatar"
          src={props.profile.photos.large || userPhoto}
        ></img>
        <div className={s.person__info}>
          <p>{props.profile.fullName}</p>
          <ul>
            <li className={s.item}>Age</li>
            <li>Age</li>
            <li>Age</li>
            <li>Age</li>
          </ul>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          ></ProfileStatusWithHooks>
          {/* <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            chengeStatus={props.changeStatus}
          ></ProfileStatus> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
