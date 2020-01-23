import React, { useEffect } from "react";

import {
  ModalTitle,
  ModalForm,
  ModalFooter,
  ModalBody,
  ModalText
} from "components/Modal";

import { useAdobeContext, EAdobeContextActions } from "context/adobe";

interface IProps {
  selection: any;
  dialog: HTMLDialogElement;
}

const Main = ({ selection, dialog }: IProps) => {
  const { setAdobeContext } = useAdobeContext();

  useEffect(() => {
    setAdobeContext({
      type: EAdobeContextActions.SET,
      payload: {
        selection,
        dialog
      }
    });
  }, []);

  return (
    <>
      <ModalForm method="dialog">
        <ModalTitle>Open Map Generator</ModalTitle>
        <ModalBody />
        <ModalFooter />
        <hr />
        <ModalText>
          This plugin build by &nbsp;
          <a href="https://basilebong.com">Basile Bong</a> is 100% open source.
        </ModalText>
        <div>
          <a href="https://basilebong.com">Buy me a coffee</a>
          {" | "}
          <a href="https://github.com">Report a bug</a>
        </div>
      </ModalForm>
    </>
  );
};

export default Main;
