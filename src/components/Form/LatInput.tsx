import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LatInput = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { lat } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentLat = e.currentTarget.value.replace(",", ".");
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        lat: parseFloat(currentLat) | 0
      }
    });
  };

  return (
    <>
      <FormGroup>
        <Label>Latitude</Label>
        <Input type="number" value={lat} onChange={e => onChange(e)} />
      </FormGroup>
    </>
  );
};

export default LatInput;
