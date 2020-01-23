import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LngInput = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { lng } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        lng: parseInt(e.currentTarget.value)
      }
    });
  };

  return (
    <>
      <FormGroup>
        <Label>Longitude</Label>
        <Input type="text" value={lng} onChange={e => onChange(e)} />
      </FormGroup>
    </>
  );
};

export default LngInput;
