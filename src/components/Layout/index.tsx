import React, { useEffect } from "react";

import {
  ModalTitle,
  ModalForm,
  ModalFooter,
  ModalBody
} from "components/Modal";

import { useAdobeContext, EAdobeContextActions } from "context/adobe";

interface IProps {
  selection: any;
  dialog: HTMLDialogElement;
}

const Main = ({ selection, dialog }: IProps): JSX.Element => {
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
      </ModalForm>
    </>
  );
};

export default Main;
