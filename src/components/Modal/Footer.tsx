import React from "react";
import styled from "@emotion/styled";
import { ModalText } from ".";
import { ButtonClose, ButtonGenerate, ButtonPreview } from "components/Buttons";

const FooterActions = styled.div({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  marginTop: "15px"
});

const ModalFooter = (): JSX.Element => {
  return (
    <>
      <FooterActions>
        <ButtonClose>Cancel</ButtonClose>
        <ButtonPreview>Preview</ButtonPreview>
        <ButtonGenerate style={{ marginRight: 0 }}>Generate</ButtonGenerate>
      </FooterActions>
      <hr />
      <ModalText>
        Build by &nbsp;
        <a href="https://basilebong.com">Basile Bong</a>, 100% open source.
      </ModalText>
      <div>
        <a href="https://basilebong.com">Buy me a coffee</a>
        {" | "}
        <a href="https://github.com">Report a bug</a>
      </div>
    </>
  );
};

export default ModalFooter;
