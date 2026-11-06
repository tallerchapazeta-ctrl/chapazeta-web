"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";

const position: [number, number] = [-31.263399964229205, -61.47994450372067];
const markerIcon = new L.Icon({
  iconUrl: "/images/icon/pin_maps-2x.png",
  iconSize: [30, 49.2],
  iconAnchor: [16, 48],
  popupAnchor: [0, -45],
});

export default function MapaUbicacion() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position} icon={markerIcon}>  
        <Popup className="
        [&_.leaflet-popup-content-wrapper]:bg-chapa-blue
        [&_.leaflet-popup-content-wrapper]:text-white
        [&_.leaflet-popup-content-wrapper]:text-right
        [&_.leaflet-popup-tip]:bg-chapa-blue
        ">CHAPA ZETA<br />
          Reparación y pintura de carrocerías</Popup>
      </Marker>
    </MapContainer>
  );
}