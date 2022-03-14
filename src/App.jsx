import "../public/style/resetstyle.css"; // reset style sheet
import "../public/style/style.css"; // main style sheet
import React from "react";
import reactDOM from "react-dom";
import NameDisplay from "./Components/NameDisplay.jsx";
import NavButton from "./Components/NavButton.jsx";

// entry point for every other component
const App = () => {
  const name = "Kate Groutage".split(""); // make an array of my name

  return (
    <main id="main-content">
      <NameDisplay name={name} />
      <NavButton name="About" />
      <NavButton name="Projects" />
      <NavButton name="Contact" />
    </main>
  );
};

reactDOM.render(<App />, document.getElementById("root"));
