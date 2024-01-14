import { Map, Layer, Marker } from "./Map";

export default function App() {
  return (<>
    <Map center={[47.82597, 31.1727]} zoom={16}>
      <Layer>
        <Marker>Hello world</Marker>
      </Layer>
    </Map>
  </>)
}
