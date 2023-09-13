import React, { useState, useEffect } from "react";
import "./App.css";
import Div from "components/State";

const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {flag && <Div />}
      {flag ? "1" : "2"}
      <input
        type="button"
        value="mount"
        onClick={() => {
          setFlag(true);
        }}
      />
      <input
        type="button"
        value="unmount"
        onClick={() => {
          setFlag(false);
        }}
      />
    </>
  );
  // let a = 0;
  {
    /* 
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(1);
  console.log("RENDER...");

  useEffect(() => {
    console.log("mount");
  }, []);
  useEffect(() => {
    console.log("state change");
    setState2(state * 2);
  }, [state]);
  return (
    <>
      {state} - {state2}
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
  */
  }
};

export default App;
