import React, { Component } from "react";
import User from "../User/User";
export default class UserList extends Component {
  render() {
    let users = [];
    for (let i = 0; i < 10; i++) {
      users.push(<User key={i} />);
    }
    return (
      <div>
        <div className="header">
          <h1>Users List</h1>
        </div>
        {users}
      </div>
    );
  }
}
