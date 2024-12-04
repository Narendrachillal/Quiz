import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div>
      <h2>Result</h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <a href="/">Take Quiz Again</a>
    </div>
  );
};

export default Result;
