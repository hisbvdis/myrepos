import { Overlay } from "ol";
import { MapContext } from "./";
import { useContext, useEffect, useRef } from "react";


export default function Popup(props) {
  const { children } = props;
  const ref = useRef();
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    const popupOverlay = new Overlay({
      element: ref.current,
      positioning: "bottom-center",
      autoPan: { animation: { duration: 150 } },
    });
    map.addOverlay(popupOverlay);

    // display popup on click
    map.on('click', (evt) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (e) => e);
      if (!feature) return;
      console.log( feature );
      popupOverlay.setPosition(evt.coordinate);
    });
  }, [map])

  return (
    <div ref={ref} className="popup">{children}</div>
  );
}
