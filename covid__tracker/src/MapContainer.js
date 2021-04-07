import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "./MapContainer.css";
import {showDataOnMap} from "./util";
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map({ countries,casesType,center, zoom }) {
  return (
    // <div className="mapContainer">
    //   <LeafletMap center={center} zoom={zoom}>
    //     <TileLayer
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       attribution='&copy; <a href="http://osm.org/copyright">
    //         OpenStreetMap</a> contributors'
    //     />
    //   </LeafletMap>
    // </div>
    <div className="mapContainer">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries,casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
