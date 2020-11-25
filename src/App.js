import { useDebugValue } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://lh3.googleusercontent.com/proxy/KQOAEJOf_9YMYM1PuQVUA69RwwEa7AFMUEhgIploa4oB3m5eVPFboOWo3ABUn16c_XTbOex0CrpLSY1HTQ3UnKDPP2hrFBp9E1Jg9rSVWN8-0VSrlNhnmGwq-LEI9FMuZQ"></img>
      </header>
      <nav className="nav">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Photo</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <article className="content">
        <img src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/nature-photography/desktop/nature_P2a_720x350.jpg.img.jpg"></img>
        <div className="person">
          <img className="person__image" src="https://html5css.ru/w3css/img_avatar3.png"></img>
          <div className="person__info">
            <ul>
              <li>Age</li>  
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
    </div>
  );
};

export default App;
