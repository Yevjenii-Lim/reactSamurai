import React from "react";
import Preloader from "../../common/Preloader";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/avatar.png';
import ProfileStatus from "../ProfileStatus";

function ProfileInfo(props) {
  if(!props.profile) {
    // console.log('asdsad')
    return <Preloader></Preloader>
  }

  // debugger
  return (
    <div className={s.content}>
    <img alt="background" src={props.profile.srcBg}></img>
    <div className={s.person}>
      <img className={s.person__image} alt="avatar" src={props.profile.photos.large || userPhoto}></img>
      <div className={s.person__info}>
        <p>{props.profile.fullName}</p>
        <ul>
          <li className={s.item}>Age</li>  
          <li>Age</li>  
          <li>Age</li>  
          <li>Age</li>  
        </ul>  
        <ProfileStatus status={props.status} chengeStatus={props.changeStatus}></ProfileStatus>
      </div> 
    </div>
  </div>
  );
}

export default ProfileInfo;
