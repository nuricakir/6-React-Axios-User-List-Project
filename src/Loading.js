import React, { useEffect, useState } from "react";
import "./App.css";

function Loading() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {!done ? (
        <div className="spinner">
          <span>Loading...</span>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Loading;
