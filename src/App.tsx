import React from "react";
import Layout from "./components/Layout";
import { AdobeContextProvider } from "./context/adobe";

interface IProps {
  dialog: HTMLDialogElement;
  selection: any;
}

const App = ({ dialog, selection }: IProps) => {
  return (
    <>
      <AdobeContextProvider>
        <Layout selection={selection} dialog={dialog} />
      </AdobeContextProvider>
    </>
  );
};

export default App;
