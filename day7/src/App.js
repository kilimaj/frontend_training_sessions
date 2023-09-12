import "./App.css";
import Table, { Div, Tbody, Tr, Td } from "components/App";

// function App() {
// class App () {}
const App = () => {
  return (
    <>
      <Div id="div" className="box" style={{ width: 100, height: 100 }}>
        <div>children</div>
      </Div>
      <Table className="table" id="tbl">
        <Table.Body>
          <Table.Row>
            <Table.Col>1</Table.Col>
            <Table.Col>2</Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>1</Table.Col>
            <Table.Col>2</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );

  {
    /*let a = "AAA";
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
*/
  }
};

export default App;
