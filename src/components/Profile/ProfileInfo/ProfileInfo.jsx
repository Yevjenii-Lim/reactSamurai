import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo(props) {
  
  return (
    <div className={s.content}>
    {/* <img alt="background" src={props.profile.srcBg}></img> */}
    <div className={s.person}>
      {/* <img className={s.person__image} alt="avatar" src={props.profile.avatar}></img> */}
      <div className={s.person__info}>
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
