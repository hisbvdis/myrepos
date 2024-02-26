import { OSM } from "ol/source";
import { parseCoord } from "./helpers";
import { Map as OLMap, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { createContext, useEffect, useRef, useState } from "react"
import "ol/ol.css";


export default function Map(props) {
  const { children } = props;
  const center = parseCoord(props.center) ?? parseCoord([0, 0]);
  const zoom = props.zoom ?? 2;
  const ref = useRef();
  const [ map, setMap ] = useState();

  useEffect(() => {
    if (ref.current.children.length > 0) return;
    const map = new OLMap();
    map.setView(new View({center, zoom}));
    map.setLayers([new TileLayer({source: new OSM()})]);
    map.setTarget(ref.current);
    setMap(map);
  }, [])

  useEffect(() => {
    if (!map) return;
    map.setView(new View({center, zoom}));
  }, [center, zoom])

  return (<>
    <MapContext.Provider value={{map, center}}>
      <div ref={ref} style={{blockSize: "300px"}}></div>
      {children}
    </MapContext.Provider>
  </>)
}

export const MapContext = createContext();
