import axios from "axios";

const JsonServer = () => {
  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    console.log(response);
    console.log(response.data);
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

  return (
    <>
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
    </>
  );
};

export default JsonServer;
