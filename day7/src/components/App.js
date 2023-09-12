export const Div = ({ id, children, ...rest }) => {
  return (
    <>
      <div id={id} {...rest}>
        {children}
      </div>
      <div id={id} className={rest.className} style={rest.style}>
        {children}
      </div>
    </>
  );
};

const Table = ({ children, ...rest }) => {
  return (
    <table border="1" {...rest}>
      {children}
    </table>
  );
};

const Tbody = ({ children, ...rest }) => {
  return <tbody {...rest}>{children}</tbody>;
};

const Tr = ({ children, ...rest }) => {
  return <tr {...rest}>{children}</tr>;
};

const Td = ({ children, ...rest }) => {
  return <td {...rest}>{children}</td>;
};

// Exporting the components as a package
Table.Body = Tbody;
Table.Row = Tr;
Table.Col = Td;

export default Table;
