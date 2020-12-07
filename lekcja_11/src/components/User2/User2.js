import React, { useState, useEffect } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

export default function User2() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      let cachedData = JSON.parse(localStorage.getItem("userdata"));
      setData(cachedData);
      setIsLoading(false);
    }, 1000);
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
              {data.name.first && data.name.last
                ? `${data.name.first} ${data.name.last}`
                : "Nie przekazano imienia i nazwiska."}
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
