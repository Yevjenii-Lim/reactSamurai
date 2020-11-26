import React from "react";
import Svg from "../Svg";
import './Aside.css'

function Aside() {
  return (
    <aside>
      <div className="aside">
      <Svg></Svg>
        <p className="aside__text">Lear more</p>
        <button>Sign up</button>
      </div>
      <div>
        <h2>Top News</h2>
        <ul>
          <li>News</li>
          <li>News</li>
          <li>News</li>
          <li>News</li>
          <li>News</li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
