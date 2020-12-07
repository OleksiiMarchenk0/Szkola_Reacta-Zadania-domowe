import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { dateFormatter } from "../../utils/dateFormatter";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
export default function User() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sendData = (data) => {
    localStorage.setItem("userdata", JSON.stringify(data));
  };
  useEffect(() => {
    let itemUrl = `https://randomuser.me/api/`;
    let data;
    fetch(itemUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, {});
  return (
    <ReactPlaceholder type="media" rows={5} ready={!isLoading}>
      {!isLoading ? (
        <div className="User">
          <div>
            <img
              src={data.picture.medium}
              alt={`${data.name.first} ${data.name.last}`}
            />
            <h1>
              <button
                onClick={() => {
                  sendData(data);
                }}
              >
                <Link to={`/users/${data.login.uuid}`}>
                  {data.name.first && data.name.last
                    ? `${data.name.first} ${data.name.last}`
                    : "Nie przekazano imienia i nazwiska."}
                </Link>
              </button>
            </h1>
            <p>
              {data.location.street.name && data.location.city
                ? `${data.location.street.name}, ${data.location.city}`
                : "brak"}
            </p>
            <p>{data.email}</p>
            <p>{dateFormatter(data.registered.date)}</p>
          </div>
        </div>
      ) : null}
    </ReactPlaceholder>
  );
}
