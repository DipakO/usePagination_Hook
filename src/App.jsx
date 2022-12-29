import React, { useState } from "react";
import { useEffect } from "react";
import Records from "./components/Records";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    paginationFunc();
  }, []);
  return (
    <>
      {data && data.length > 0 ? <Records data={data} /> : <p>Loading ...</p>}
    </>
  );
};

export default App;
