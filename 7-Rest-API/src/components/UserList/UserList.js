import React, { useEffect, useState } from "react";
import User from "../User/User";
import ReactPlaceholder from "react-placeholder";

export default function UserList({usersAmount }) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let itemUrl = `https://randomuser.me/api/?results=${usersAmount}`;
    fetch(itemUrl, {
      cors: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => {
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
      {userData &&
        userData.map((user) => (
          <ReactPlaceholder type="media" rows={5} ready={!isLoading}>
            {!isLoading ? (
              <User key={user.login.uuid} data={user} />
            ) : null}
          </ReactPlaceholder>
        ))}
    </div>
  );
}
