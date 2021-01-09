import React from "react";
import Preloader from "../../common/Preloader";
import s from './ProfileInfo.module.css'


function ProfileInfo(props) {
  if(!props.profile) {
    return <Preloader></Preloader>
  }

  // debugger
  return (
    <div className={s.content}>
    <img alt="background" src={props.profile.srcBg}></img>
    <div className={s.person}>
      <img className={s.person__image} alt="avatar" src={props.profile.photos.large}></img>
      <div className={s.person__info}>
        <p>{props.profile.fullName}</p>
        <ul>
          <li className={s.item}>Age</li>  
          <li>Age</li>  
          <li>Age</li>  
          <li>Age</li>  
        </ul>  
      </div> 
    </div>
  </div>
  );
}

export default ProfileInfo;
