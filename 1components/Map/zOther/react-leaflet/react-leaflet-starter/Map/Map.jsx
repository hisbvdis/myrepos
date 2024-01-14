import { useMemo } from "react";
import dynamic from "next/dynamic";


export default function Map(props) {
  const DynamicMap = useMemo(() => dynamic(() => import("./DynamicMap"), { ssr: false }),[]);

  return (
    <DynamicMap {...props}/>
  )
}
