import React from "react";

const Histroy = ({ histroy, moveTo, currentMove }) => {
  return (
    <ul>
      {histroy.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? "bold" : "normal",
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? "Go to Game start" : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Histroy;
