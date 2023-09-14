import axios from "axios";

const JsonServer = () => {
  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/posts");
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
    </>
  );
};

export default JsonServer;