import { Collection, Feature } from "ol"
import { Point } from "ol/geom"
import { Icon, Style } from "ol/style";
import { useContext, useEffect, useState } from "react";
import { LayerContext, MapContext, Popup, parseCoord } from "./";
import { Translate } from "ol/interaction";


export default function Marker(props) {
  const { children, draggable } = props;
  const mapContext = useContext(MapContext);
  const layerContext = useContext(LayerContext);
  const map = mapContext.map;
  const coord = parseCoord(props.coord) ?? mapContext.center;
  const layerSource = layerContext.layerSource;
  const [ point, setPoint ] = useState();

  useEffect(() => {
    if (!map || !layerSource) return;
    const point = new Point(coord);
    const feature = new Feature({ geometry: point });
    feature.setStyle(new Style({image: new Icon({width: 25, height: 41, anchor: [0.5, 41], anchorXUnits: "fraction", anchorYUnits: "pixels", src: "/marker-icon.png"})}));
    layerSource.addFeature(feature);
    if (draggable) {
      map.addInteraction(new Translate({features: new Collection([feature])}));
    }
    setPoint(point);
  }, [layerSource, map])

  useEffect(() => {
    if (!point) return;
    point.setCoordinates(coord);
  }, [coord])

  return (
    <>
      {children ? <Popup>{children}</Popup> : null}
    </>
  )
}
