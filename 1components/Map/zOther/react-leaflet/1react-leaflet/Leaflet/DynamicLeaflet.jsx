import { useMemo } from "react";
import dynamic from "next/dynamic";


export default function Leaflet(props) {
  const DynamicLeaflet = useMemo(() => dynamic(() => import("./Leaflet"), { ssr: false }),[]);

  return (
    <DynamicLeaflet {...props}/>
  )
}
