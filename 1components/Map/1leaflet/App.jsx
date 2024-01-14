import { useState } from "react";

export default function App(props) {
  const [ mapInstance, setMapInstance ] = useState();

  const handleMap = {
    findCoodFromAddress: async () => {
      if (!state.city_id || state.address === "") return;
      const dbCity = dbCities.find(({id}) => id === Number(state.city_id));
      const result = await nominatimQuery({country: dbCity.country.name, city: dbCity.name, street: state.address});
      if (!result) return;
      setState((state) => {state.lat = result.lat, state.lon = result.lon});
      mapInstance.setView([result.lat, result.lon]);
      mapInstance.setZoom(17);
    },
    updateCoord: (e) => {
      const { lat, lng } = e.target._latlng;
      setState((state) => {state.lat = lat; state.lon = lng});
    },
    liftMapInstance: (map) => {
      setMapInstance(map);
    }
  }

  return (<>
    <Map center={[state.lat, state.lon]} zoom={16} liftMapInstance={handleMap.liftMapInstance}>
      <Marker coord={[state.lat, state.lon]} draggable onDragEnd={handleMap.updateCoord}/>
    </Map>
  </>)
}
