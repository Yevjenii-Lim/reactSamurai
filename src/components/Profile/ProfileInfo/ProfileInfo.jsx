import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
  return (
    <div className={s.content}>
    <img alt="background" src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/nature-photography/desktop/nature_P2a_720x350.jpg.img.jpg"></img>
    <div className={s.person}>
      <img className={s.person__image} alt="avatar" src="https://html5css.ru/w3css/img_avatar3.png"></img>
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
