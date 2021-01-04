import * as axios from "axios";
import React from "react";
import User from "./User";
import styles from "./user.module.css"

class Users extends React.Component {

componentDidMount() {
  axios
  .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}count=${this.props.pageSize}`)
  .then((Response) => {
    console.log(Response)
    this.props.setUsers(Response.data.items)
    this.props.setTotalUsers(Response.data.totalCount)
  })
}
// getUsers = () => {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users?page=2")
//       .then((Response) => this.props.setUsers(Response.data.items));
// }
onPageChenged = (page) => {
  this.props.setPage(page);
  axios
  .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
  .then((Response) => this.props.setUsers(Response.data.items));
}
  render () {

    let pagesCount = this.props.totalUsers / this.props.pageSize;
    let pages = [];
    for(let i = 1; i <= 10 ; i++) {
      pages.push(i)
    }
    return (
      <div>
       <div>
         {
        pages.map((page,index) => {
        return <span onClick={(e) => this.onPageChenged(page)} key={index} className={this.props.currentPage === page ? styles.selectedPage: styles.notSelectedPage}>{page}</span>
      })
        }
         </div> 

        <button onClick={this.getUsers}>Get users</button>
      {
        this.props.users.map((u) => (
      <User
        key={u.id}
        id={u.id}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followed={u.followed}
        fullname={u.name}
        status={u.status}
      //   location={u.location}
        photos={u.photos}
      ></User>
    )) 
      }
      </div>
      
    );
  }
}

export default Users;
