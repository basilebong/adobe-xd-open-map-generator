import React, { useEffect } from "react";

import { ModalTitle, ModalForm, ModalFooter } from "../Modal";

import { useAdobeContext, EAdobeContextActions } from "../../context/adobe";

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
        <ModalFooter />
      </ModalForm>
    </>
  );
};

export default Main;
