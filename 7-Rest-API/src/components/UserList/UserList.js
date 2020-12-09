import React, { useEffect, useState } from "react";
import User from "../User/User";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let itemUrl = `https://randomuser.me/api/?results=10`;

    fetch(itemUrl,{
      'cors':"no-cors"
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    return (
      <div>
        <div className="header">
          <h1>Users List</h1>
        </div>
        {userData && userData.map(user=>
          <User key = {user.login.uuid} 
          data= {user}
          isLoading={isLoading}/>)}
      </div>
    );
}
