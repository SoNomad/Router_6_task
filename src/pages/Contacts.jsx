import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function Contacts() {
  return (
    <div className="main">
      <div className="text">
        <h1>Я где-то здесь</h1>
      </div>
      <div className="map">
        <YMaps>
          <Map
            defaultState={{
              center: [41.019484, 28.884538],
              zoom: 10,
            }}
            width={"600px"}
            height={"300px"}
          >
            <Placemark geometry={[41.019484, 28.884538]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
