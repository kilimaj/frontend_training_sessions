import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Div from "components/State";
import Form from "components/Form";

const App = () => {
  const data = useRef({});
  return (
    <>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        Print data
      </button>
      <Form.Text data={data} id="a" />
      <br /> <br />
      <Form.Password data={data} id="b" />
      <br /> <br />
      <Form.Textarea data={data} id="c" />
      <br /> <br />
      <Form.Select
        data={data}
        id="d"
        options={[
          {
            label: "Tanzania",
            value: "TZ",
          },
          { label: "Korea", value: "KR" },
        ]}
      />
      <br /> <br />
      <Form.Radio
        data={data}
        id="e"
        options={[
          {
            label: "Tanzania",
            value: "TZ",
          },
          { label: "Korea", value: "KR" },
        ]}
      />
      <br /> <br />
      <Form.Check
        data={data}
        id="f"
        options={[
          {
            label: "Tanzania",
            value: "TZ",
          },
          { label: "Korea", value: "KR" },
        ]}
      />
      <br /> <br />
    </>
  );
  /* const [flag, setFlag] = useState(true);
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
  */
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
