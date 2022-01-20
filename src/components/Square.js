import React from "react";

const Square = ({ value, onClick, iswinningSquares }) => {
  //console.log("square rerender");
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningSquares ? "bold" : "noraml" }}
    >
      {value}
    </button>
  );
};

export default Square;
