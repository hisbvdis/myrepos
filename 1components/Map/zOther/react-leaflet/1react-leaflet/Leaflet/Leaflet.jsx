import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import "./Leaflet.css";


export default function Leaflet(props) {
  const { coord, zoom, children } = props
  L.Icon.Default.mergeOptions({iconUrl: "/leaflet/marker-icon.png", iconSize: [25,41], shadowSize: 0}); /* public folder */

  return (
    <MapContainer className="leaflet" center={coord} zoom={zoom} style={{minBlockSize: "300px"}}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
      {/* <Marker position={coord}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
  </MapContainer>
  )
}
