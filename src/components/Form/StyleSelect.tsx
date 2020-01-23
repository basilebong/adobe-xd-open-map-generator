import React from "react";

import { EMapStyle } from "models/map";
import { useMapContext, EMapContextActions } from "context/map";
import { Label, FormGroup, Select } from ".";

const StyleSelect = () => {
  const { mapContext, setMapContext } = useMapContext();

  const options = Object.entries(EMapStyle).map(([key, value]) => (
    <option key={key} value={value}>
      {value}
    </option>
  ));

  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        style: e.currentTarget.value as EMapStyle
      }
    });
    console.log(mapContext.style);
  };

  return (
    <>
      <FormGroup>
        <Label>Map Theme</Label>
        <Select value={mapContext.style} onChange={e => onChange(e)}>
          {options}
        </Select>
      </FormGroup>
    </>
  );
};

export default StyleSelect;
