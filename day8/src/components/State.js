import React, { useEffect, useState } from "react";

const Div = () => {
  const [state, setState] = useState({
    a: 1,
    b: 2,
  });
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <div>
        a : {state.a} / b : {state.b}
      </div>
      <button
        onClick={() => {
          setState({ a: 10, b: 10 });
        }}
      >
        change
      </button>
    </>
  );
};
export default Div;
