import axios from "axios";
import React, { useState } from "react";

const JsonServer = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    console.log(response);
    console.log(response.data);
    setData(response.data);
  };

  const addData = async () => {
    let data = {
      title: "react",
      author: "John Kilima",
    };
    const response = await axios.post("http://localhost:4000/posts", data);
    console.log(response);
    console.log(response.data);
  };

  const updateData = async () => {
    let data = {
      title: "updated react",
      author: "John Kilima",
    };
    const response = await axios.put("http://localhost:4000/posts/2", data);
    console.log(response);
    console.log(response.data);
  };

  const deleteData = async () => {
    const response = await axios.delete("http://localhost:4000/posts/2");
    console.log(response);
    console.log(response.data);
  };

  return (
    <>
      <table border="1">
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        onClick={() => {
          loadData();
        }}
      >
        GET
      </button>
      <br></br>
      <button
        onClick={() => {
          addData();
        }}
      >
        POST
      </button>
      <br></br>
      <button
        onClick={() => {
          updateData();
        }}
      >
        UPDATE
      </button>

      <br></br>
      <button
        onClick={() => {
          deleteData();
        }}
      >
        DELETE
      </button>
    </>
  );
};

export default JsonServer;
