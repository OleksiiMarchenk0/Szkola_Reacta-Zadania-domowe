import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { dateFormatter } from "../../utils/dateFormatter";
import UserDetails from "../UserDetails/UserDetails";
export default function UserList() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("ok");
    let itemUrl = `https://randomuser.me/api/`;
    let data;
    fetch(itemUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  },{});
  return (
    <div className="User">
       <img
        src={data.picture.medium}
        alt={`${data.name.first} ${data.name.last}`}
      />
      <Router>
        <Link to={`/users/${data.login.uuid}`}>
          <h1>
            {data.name.first && data.name.last
              ? `${data.name.first} ${data.name.last}`
              : "Nie przekazano imienia i nazwiska."}
          </h1>
        </Link>
        <Switch>
          <Route path="/users/:uuid">
           <UserDetails/>
          </Route>
        </Switch>
      </Router>
      <p>
        {data.location.street.name && data.location.city
          ? `${data.location.street.name}, ${data.location.city}`
          : "brak"}
      </p>
      <p>{data.email}</p>
      <p>{dateFormatter(data.registered.date)}</p>
    </div>
  );
}
