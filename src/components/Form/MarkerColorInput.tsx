import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LngInput = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { markerColor } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
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
      <FormGroup>
        <Label>Marker Color</Label>
        <Input type="text" value={markerColor} onChange={e => onChange(e)} />
      </FormGroup>
    </>
  );
};

export default LngInput;
