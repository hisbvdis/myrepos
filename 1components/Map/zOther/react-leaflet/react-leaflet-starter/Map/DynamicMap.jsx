import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./DynamicMap.css";


export default function Map(props) {
  const { coord, zoom } = props

  return <MapContainer className="map" center={coord} zoom={zoom} style={{minBlockSize: "300px"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coord}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}
