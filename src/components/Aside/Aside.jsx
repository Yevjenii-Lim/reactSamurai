import React from "react";
import Svg from "./Svg";
import s from './Aside.module.css';

function Aside() {
  return (
    <aside>
      <div className={s.aside}>
      <Svg></Svg>
        <p className={s.aside__text}>Lear more</p>
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
