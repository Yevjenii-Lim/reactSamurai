import React from "react";
import './Profile.css'
function Profile() {
  return (
    <article className="content">
    <img src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/nature-photography/desktop/nature_P2a_720x350.jpg.img.jpg"></img>
    <div className="person">
      <img className="person__image" src="https://html5css.ru/w3css/img_avatar3.png"></img>
      <div className="person__info">
        <ul>
          <li className="item">Age</li>  
          <li>Age</li>  
          <li>Age</li>  
          <li>Age</li>  
        </ul>  
      </div> 
    </div>
    <div className="add-post">
      <input className="add-post__input" type="text"></input>
      <button className="add-post__button">Add</button>
    </div> 
    <div className="posts">
      <div className="post">
        post 1
      </div>
    </div>
  </article>
  );
}

export default Profile;
