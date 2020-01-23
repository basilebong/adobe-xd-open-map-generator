import { IMap, EMapStyle } from "models/map";

export const defaultMapContext: IMap = {
  lng: 50.850346,
  lat: 4.351721,
  zoom: 14,
  displayMarker: true,
  markerColor: "333333",
  style: EMapStyle.STANDARD,
  height: 200,
  width: 450,
  token:
    "pk.eyJ1IjoiYmFzaWxlYm9uZyIsImEiOiJjazVxcDJ4c2cwNGdwM2ptcXdna3d6Mm4xIn0.JU3kb17Q2P2EdibssC6QuQ"
};
