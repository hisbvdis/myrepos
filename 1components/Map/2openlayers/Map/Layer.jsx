import { MapContext } from "./";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { createContext, useContext, useEffect, useState } from "react"


export default function Layer(props) {
  const { children } = props;
  const mapContext = useContext(MapContext);
  const map = mapContext.map;
  const [ layerSource, setLayerSource ] = useState();
  const [ layer, setLayer ] = useState();

  useEffect(() => {
    if (!map) return;
    const layerSource = new VectorSource({features: []});
    const layer = new VectorLayer({source: layerSource});
    map.addLayer(layer);
    setLayerSource(layerSource);
    setLayer(layer);
  }, [map])

  return (
    <LayerContext.Provider value={{layerSource, layer}}>
      {children}
    </LayerContext.Provider>
  )
}

export const LayerContext = createContext();
