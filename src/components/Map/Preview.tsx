import React from "react";
import { useMapContext } from "context/map";
import styled from "@emotion/styled";

const width = 450;
const height = 200;

const Imagemap = styled.img({
  height: height + "px",
  width: width + "px",
  margin: "15px auto"
});

const MapPreview = () => {
  const { mapContext } = useMapContext();
  const { lat, lng, token, style, zoom } = mapContext;

  return (
    <>
      <Imagemap
        src={`https://api.mapbox.com/styles/v1/mapbox/${style}/static/pin-l(${lat},${lng})/${lat},${lng},${zoom},0.00,0.00/${width}x${height}@2x?access_token=${token}`}
      />
    </>
  );
};

export default MapPreview;
