import React from "react";
// import { BrowserWindow } from "electron";
const electron = require("electron");

const App: React.FC = () => {
  return (
    <>
      <button onClick={() => electron}>exit</button>
    </>
  );
};

export default App;
