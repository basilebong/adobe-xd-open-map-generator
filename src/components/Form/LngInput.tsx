import React from "react";

import { FormGroup, Label, Input } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const LngInput = (): JSX.Element => {
  const { mapContext, setMapContext } = useMapContext();
  const { lng } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const currentLng = e.currentTarget.value.replace(",", ".");
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        lng: parseFloat(currentLng) | 0
      }
    });
  };

  return (
    <>
      <FormGroup>
        <Label>Longitude</Label>
        <Input type="number" value={lng} onChange={(e): void => onChange(e)} />
      </FormGroup>
    </>
  );
};

export default LngInput;
