import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LatInput = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { lat } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        lat: parseInt(e.currentTarget.value)
      }
    });
  };

  return (
    <>
      <FormGroup>
        <Label>Latitude</Label>
        <Input type="text" value={lat} onChange={e => onChange(e)} />
      </FormGroup>
    </>
  );
};

export default LatInput;
