import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
