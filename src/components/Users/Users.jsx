import React from "react";
import User from "./User";
import styles from "./user.module.css"

let Users = (props) => {

    let pagesCount = props.totalUsers / props.pageSize;
    let pages = [];
    for(let i = 1; i <= 10 ; i++) {
      pages.push(i)
    }
  return (
    <div>
      <div>
        {pages.map((page, index) => {
          return (
            <span key={index}
              onClick={(e) =>{props.onPageChenged(page)}} 
              className={
                props.currentPage === page
                  ? styles.selectedPage
                  : styles.notSelectedPage
              }
            >
              {page}
            </span>
          );
        })}
      </div>

      <button onClick={props.getUsers}>Get users</button>
      {props.users.map((u) => (
        <User
          key={u.id}
          id={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
          followed={u.followed}
          fullname={u.name}
          status={u.status}
          //   location={u.location}
          photos={u.photos}
        ></User>
      ))}
    </div>
  );
};


export default Users