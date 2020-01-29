import React from "react";

import { FormGroup, Label, Select } from ".";
import { useMapContext, EMapContextActions } from "context/map";

const MarkerDisplaySelect = (): JSX.Element => {
  const { mapContext, setMapContext } = useMapContext();
  const { displayMarker } = mapContext;

  const onChange = (e: React.FormEvent<HTMLSelectElement>): void => {
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
        <Label>Marker Display</Label>
        <Select
          value={displayMarker.toString()}
          onChange={(e): void => onChange(e)}
        >
          <option value="true">Show</option>
          <option value="false">Hide</option>
        </Select>
      </FormGroup>
    </>
  );
};

export default MarkerDisplaySelect;
