import { useMemo } from "react";
import dynamic from "next/dynamic";


export default function DynamicMarker(props) {
  const Marker = useMemo(() => dynamic(() => import("../Marker"), { ssr: false }),[]);

  return (
    <Marker {...props}/>
  )
}
