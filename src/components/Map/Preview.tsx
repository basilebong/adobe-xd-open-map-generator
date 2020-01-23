import React, { useEffect } from "react";
import { useMapContext } from "context/map";
import styled from "@emotion/styled";

import { defaultMapContext } from "context/map/default";

const ImageMap = styled.img({
  height: defaultMapContext.height + "px",
  width: defaultMapContext.width + "px",
  margin: "15px auto 0 auto"
});

const MapPreview = () => {
  const { mapContext } = useMapContext();
  const { url } = mapContext;

  useEffect(() => {}, [url]);

  return <>{url ? <ImageMap src={url} /> : null}</>;
};

export default MapPreview;
