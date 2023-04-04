import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

export default function LocationMap({ data,locationName }) {

  return (
    <div className="map-container">
      <MapContainer center={data} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; InstaPacket 2023"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={data}>
          <Tooltip direction="left" offset={[-20, 0]} opacity={50} permanent>
            {locationName}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}