import React from "react";
import {
  StyleSelect,
  LatInput,
  LngInput,
  MarkerDisplaySelect
} from "components/Form";
import { MapPreview } from "components/Map";
import styled from "@emotion/styled";

const InputGroup = styled.div({
  display: "flex",
  margin: 0
});

const ModalBody = () => (
  <>
    <InputGroup>
      <StyleSelect />
      <LatInput />
      <LngInput />
    </InputGroup>
    <InputGroup>
      <MarkerDisplaySelect />
    </InputGroup>
    <MapPreview />
  </>
);

export default ModalBody;
