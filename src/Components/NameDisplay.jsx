import React from "react";

// rendering my name on screen in different p elements
const NameDisplay = ({ name }) => {
  return (
    <h1 id="first-heading" className="flex main-header">
      {/* the space character is replaced with &nbsp; which is a whitespace character */}
      {name.map((character, index) => (
        <p key={index} id={`My-name-${index}`}>
          {character !== " " ? (
            character
          ) : (
            <span id="white-space-character">&nbsp;</span>
          )}
        </p>
      ))}
    </h1>
  );
};

export default NameDisplay;
