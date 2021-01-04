import * as axios from "axios";
import React from "react";
import User from "./User";


class Users extends React.Component {

componentDidMount() {
  axios
  .get("https://social-network.samuraijs.com/api/1.0/users")
  .then((Response) => this.props.setUsers(Response.data.items));
}
getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((Response) => this.props.setUsers(Response.data.items));
}
  render () {
    return (
      <div>
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
