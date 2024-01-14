import { useMemo } from "react";
import dynamic from "next/dynamic";


export default function Marker(props) {
  const DynamicMarker = useMemo(() => dynamic(() => import("react-leaflet").then((data) => data.Marker), { ssr: false }),[]);

  return (
    <DynamicMarker {...props}/>
  );
}
