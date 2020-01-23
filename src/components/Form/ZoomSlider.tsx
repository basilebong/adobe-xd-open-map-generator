import React from "react";
import { useMapContext, EMapContextActions } from "context/map";
import { Label, FormGroup } from ".";

const ZoomSlider = () => {
  const { mapContext, setMapContext } = useMapContext();
  const { zoom } = mapContext;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMapContext({
      type: EMapContextActions.SET,
      payload: {
        zoom: parseInt(e.currentTarget.value)
      }
    });
  };

  return (
    <FormGroup>
      <Label>
        <span>Zoom ({100 / (20 / zoom)}%)</span>
      </Label>
      <input
        type="range"
        min={1}
        max={20}
        defaultValue={zoom}
        onChange={e => onChange(e)}
      />
    </FormGroup>
  );
};

export default ZoomSlider;
