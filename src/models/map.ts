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
  zoom: TZoom;
  url?: string;
  height: number;
  width: number;
}

type TZoom =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
