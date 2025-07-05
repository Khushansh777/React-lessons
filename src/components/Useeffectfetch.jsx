import React, { useEffect, useState } from "react";

function Useeffectfetch() {
  const [responseVal, setresponseVal] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (data.ok) {
          const response = await data.json();
          setresponseVal(response);
        }
      } catch (e) {
        console.error("There was error in fetching", e);
      }
    }

    fetchData(); // Call the function
  }, []); // Add dependency array to run only once on mount

  return (
    <div>
      <h1>Useeffectfetch</h1>
      <ul>
        {responseVal.map((response) => {
          return <li key={response.id}>{response.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Useeffectfetch;
