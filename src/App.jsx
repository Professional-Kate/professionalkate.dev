import "../public/style/resetstyle.css"; // reset style sheet
import "../public/style/style.css"; // main style sheet
import React from "react";
import reactDOM from "react-dom";

// entry point for every other component
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
