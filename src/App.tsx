import React from "react";
import Layout from "./components/Layout";
import { AdobeContextProvider } from "./context/adobe";
import { MapContextProvider } from "./context/map";

interface IProps {
  dialog: HTMLDialogElement;
  selection: any;
}

const App = ({ dialog, selection }: IProps) => {
  return (
    <>
      <AdobeContextProvider>
        <MapContextProvider>
          <Layout selection={selection} dialog={dialog} />
        </MapContextProvider>
      </AdobeContextProvider>
    </>
  );
};

export default App;
