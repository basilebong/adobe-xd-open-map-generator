import React from "react";
import { useAdobeContext } from "context/adobe";
import styled from "@emotion/styled";
import { useMapContext, EMapContextActions } from "context/map";
import { ModalText } from ".";

const FooterActions = styled.div({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  marginTop: "15px"
});

const width = 450;
const height = 200;

const ModalFooter = () => {
  const { adobeContext } = useAdobeContext();
  const { mapContext, setMapContext } = useMapContext();
  const { dialog } = adobeContext;
  const {
    style,
    markerColor,
    lat,
    lng,
    zoom,
    token,
    displayMarker,
    url
  } = mapContext;

  const onClose = () =>
    dialog ? dialog.close() : console.error("Missing dialog");

  const onPreview = () => {
    const marker = displayMarker
      ? `pin-l+${markerColor ? markerColor : "333333"}(${lat},${lng})/`
      : "";

    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        url: `https://api.mapbox.com/styles/v1/mapbox/${style}/static/${marker}${lat},${lng},${zoom},0.00,0.00/${width}x${height}@2x?access_token=${token}`
      }
    });

    console.log(url);
  };

  return (
    <>
      <FooterActions>
        <button
          uxp-variant="secondary"
          uxp-quiet="true"
          type="button"
          onClick={() => onClose()}
        >
          Cancel
        </button>
        <button type="button" uxp-variant="primary" onClick={() => onPreview()}>
          Preview
        </button>
        <button uxp-variant="cta" style={{ marginRight: 0 }} type="button">
          Generate
        </button>
      </FooterActions>
      <hr />
      <ModalText>
        Build by &nbsp;
        <a href="https://basilebong.com">Basile Bong</a>, 100% open source.
      </ModalText>
      <div>
        <a href="https://basilebong.com">Buy me a coffee</a>
        {" | "}
        <a href="https://github.com">Report a bug</a>
      </div>
    </>
  );
};

export default ModalFooter;
