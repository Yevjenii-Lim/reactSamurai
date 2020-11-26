import React from "react";
import './Aside.css'
function Aside() {
  return (
    <aside>
      <div className="aside">
      <svg className="aside__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
