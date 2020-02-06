import React, { useEffect } from "react";

import {
  ModalTitle,
  ModalForm,
  ModalFooter,
  ModalBody,
  ModalEmptySelectionError
} from "components/Modal";

import { useAdobeContext, EAdobeContextActions } from "context/adobe";

interface IProps {
  selection?: any;
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

  const selectionLength = Object.entries(selection).length;

  if (selectionLength === 1) {
    return (
      <ModalForm method="dialog">
        <ModalTitle>Open Map Generator</ModalTitle>
        <hr />
        <ModalBody />
        <ModalFooter />
      </ModalForm>
    );
  } else {
    return (
      <ModalForm method="dialog">
        <ModalEmptySelectionError />
      </ModalForm>
    );
  }
};

export default Main;
