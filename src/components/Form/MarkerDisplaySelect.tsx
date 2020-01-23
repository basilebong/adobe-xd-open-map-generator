import React from "react";

import { FormGroup, Label, Select } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const MarkerDisplaySelect = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { displayMarker } = mapContext;

  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        displayMarker: e.currentTarget.value === "true"
      }
    });
  };

  return (
    <>
      <FormGroup>
        <Label>Display marker</Label>
        <Select value={displayMarker.toString()} onChange={e => onChange(e)}>
          <option value="true">Show</option>
          <option value="false">Hide</option>
        </Select>
      </FormGroup>
    </>
  );
};

export default MarkerDisplaySelect;
