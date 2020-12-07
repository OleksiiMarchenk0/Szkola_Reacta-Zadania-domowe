import React, { useState, useEffect } from "react";
import { dateFormatter } from "../../utils/dateFormatter";
import ReactPlaceholder from "react-placeholder";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "react-placeholder/lib/reactPlaceholder.css";

export default function UserDetails() {
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
            <MapContainer
              className="map"
              center={[data.location.coordinates.latitude,data.location.coordinates.longitude]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.location.coordinates.latitude,data.location.coordinates.longitude]}>
                <Popup>
                  {`Localization of ${data.name.first} ${data.name.last}`}
                </Popup>
              </Marker>
            </MapContainer>
            ,
          </div>
        </div>
      ) : null}
    </ReactPlaceholder>
  );
}
