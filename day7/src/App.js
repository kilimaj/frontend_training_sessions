import "./App.css";

// function App() {
// class App () {}
const App = () => {
  let a = "AAA";
  let b = <div>BBBB</div>;
  const fun = (param) => {
    return "function" + param;
  };

  const funA = (param) => {
    return <div>{param}</div>;
  };

  const click = () => {
    console.log("click...");
  };
  return (
    <>
      {/* Comment */}
      {funA("A")}
      {b}
      {fun("+param")}
      {fun(<div>AAAA</div>)}

      {fun("<div>AAAA</div>")}

      <div
        onClick={({ target }) => {
          console.log(target);
        }}
        className={a}
      >
        {a}
      </div>
      <div
        className={a}
        onClick={({ target, type }) => {
          console.log(target, type);
        }}
      >
        {a}
      </div>
      <div
        className={1 + 2}
        onClick={() => {
          click();
        }}
      >
        CLICK
      </div>
      <div className={a + 2}>{a}</div>

      <div>HELLO WORLD !</div>
    </>
  );
};

export default App;
