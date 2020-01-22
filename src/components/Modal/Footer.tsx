import React from "react";
import { useAdobeContext } from "../../context/adobe";
import styled from "@emotion/styled";

const Footer = styled.div({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end"
});

const ModalFooter = () => {
  const { adobeContext } = useAdobeContext();
  const { dialog } = adobeContext;

  const onClose = () =>
    dialog ? dialog.close() : console.error("Missing dialog");

  return (
    <Footer>
      <button
        uxp-variant="secondary"
        uxp-quiet="true"
        type="button"
        onClick={() => onClose()}
      >
        Cancel
      </button>
      <button uxp-variant="cta" type="button">
        Generate
      </button>
    </Footer>
  );
};

export default ModalFooter;
