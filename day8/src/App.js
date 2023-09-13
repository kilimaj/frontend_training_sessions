import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // let a = 0;
  const [state, setState] = useState(1);
  console.log("RENDER...");

  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    console.log("state change");
  }, [state]);
  return (
    <>
      {state}
      {state}
      {state}

      <input
        type="button"
        value="plus"
        onClick={() => {
          setState(state + 1);
          console.log(state);
        }}
      ></input>
    </>
  );
};

export default App;
