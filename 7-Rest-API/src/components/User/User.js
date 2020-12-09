import React from "react";
import { Link } from "react-router-dom";
import { dateFormatter } from "../../utils/dateFormatter";
import "react-placeholder/lib/reactPlaceholder.css";
export default function User({data}) {
  const sendData = (data) => {
    localStorage.setItem("userdata", JSON.stringify(data));
  };
  return (
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
  );
}
