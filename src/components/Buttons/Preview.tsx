import React from "react";
import { useMapContext, EMapContextActions } from "context/map";
import { EButtonVariants } from "enums/buttons";

interface IButtonPreviewProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: EButtonVariants;
  quiet?: boolean;
}

const width = 450;
const height = 200;

const ButtonPreview = (props: IButtonPreviewProps): JSX.Element => {
  const { mapContext, setMapContext } = useMapContext();
  const {
    style,
    markerColor,
    lat,
    lng,
    zoom,
    token,
    displayMarker
  } = mapContext;

  const uxpVariant = props.variant || EButtonVariants.SECONDARY;
  const uxpQuiet = props.quiet || false;

  const onPreview = (): void => {
    const marker = displayMarker
      ? `pin-l+${markerColor ? markerColor : "333333"}(${lat},${lng})/`
      : "";

    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        url: `https://api.mapbox.com/styles/v1/mapbox/${style}/static/${marker}${lat},${lng},${zoom},0.00,0.00/${width}x${height}@2x?access_token=${token}`
      }
    });
  };

  return (
    <button
      type="button"
      uxp-variant={uxpVariant}
      uxp-quiet={uxpQuiet ? "true" : ""}
      onClick={(): void => onPreview()}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default ButtonPreview;
