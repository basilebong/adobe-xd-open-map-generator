import React from "react";

interface IProps {
  dialog: HTMLDialogElement;
  selection: any;
}

const App = ({ dialog, selection }: IProps) => {
  return (
    <>
      <h1>Hello, this is my first plugin</h1>
    </>
  );
};

export default App;
