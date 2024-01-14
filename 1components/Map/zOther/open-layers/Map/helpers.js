import { fromLonLat } from "ol/proj"

export const parseCoord = (coord) => {
  if (!coord) return undefined;
  return fromLonLat([coord[1], coord[0]]);
}
