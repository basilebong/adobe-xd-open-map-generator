import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LngInput = (): JSX.Element => {
  const { mapContext, setMapContext } = useMapContext();
  const { markerColor, displayMarker } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    const hexColor =
      value.substr(0, 1) === "#" ? value.substr(1, 6) : value.substr(0, 6);
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        markerColor: hexColor
      }
    });
  };

  return (
    <>
      {displayMarker ? (
        <FormGroup>
          <Label>Marker Color</Label>
          <Input
            type="text"
            value={markerColor}
            onChange={(e): void => onChange(e)}
          />
        </FormGroup>
      ) : null}
    </>
  );
};

export default LngInput;
