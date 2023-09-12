export const Div = ({ text, children }) => {
  return (
    <div>
      {children} - {text} - {children}
    </div>
  );
};

const Table = () => {
  return (
    <table border="1">
      <Tbody></Tbody>
    </table>
  );
};

const Tbody = () => {
  return (
    <tbody>
      <Tr></Tr>
    </tbody>
  );
};

const Tr = () => {
  return (
    <tr>
      <Td value={1} />
      <Td value={2} />
    </tr>
  );
};

const Td = ({ value }) => {
  return <td>{value}</td>;
};

export default Table;
