import React, { Component } from "react";
import UserList from '../UserList/UserList';
export default class User extends Component {
  
  render() {
    let users=[];
    for (let i =0;i<10;i++)
    {
      users.push(<UserList/>)
    }
    return <div>
        {users}
    </div>;
  }
}
