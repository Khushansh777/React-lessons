import React, { useEffect, useState } from "react";

function FetchDataEffect() {
  const [dataVal, setdataVal] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setdataVal(data);
          }
        }
      } catch (e) {
        throw new Error("Problem with fetching", e);
      }
    }
    fetchData();
  });
  return (
    <div>
      <h1>FetchDataEffect </h1>
      <ul>
        {dataVal.map((value) => {
          return <li key={value.id}>{value.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchDataEffect;
