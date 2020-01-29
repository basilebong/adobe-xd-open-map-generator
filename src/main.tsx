import "./react-shim";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const initApp = (selection: any): void => {
  let dialog: HTMLDialogElement;

  const getDialog = (): HTMLDialogElement => {
    if (dialog == null) {
      dialog = document.createElement("dialog");
      ReactDOM.render(<App dialog={dialog} selection={selection} />, dialog);
    }
    return dialog;
  };

  return document.body.appendChild(getDialog()).showModal();
};

module.exports = {
  commands: {
    initApp
  }
};
