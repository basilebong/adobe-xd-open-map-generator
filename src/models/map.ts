export enum EMapStyle {
  STANDARD = "streets-v11",
  LIGHT = "light-v10",
  DARK = "dark-v10",
  RETRO = "outdoors-v11",
  SATELLITE = "satellite-streets-v11"
}

export interface IMap {
  style: EMapStyle;
  displayMarker: boolean;
  markerColor: string;
  lat: number;
  lng: number;
  token: string;
  zoom: number;
  url?: string;
  height: number;
  width: number;
}
