"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";


export default function DynamicMap(props) {
  const Map = useMemo(() => dynamic(() => import("../Map"), { ssr: false }),[]);

  return (
    <Map {...props}/>
  )
}
