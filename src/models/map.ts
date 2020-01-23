export enum EMapStyle {
  STANDARD = "standard",
  LIGHT = "silver",
  DARK = "dark",
  RETRO = "retro"
}

export interface IMap {
  style: EMapStyle;
  displayMarker: boolean;
  lat: string;
  lng: string;
}
