import React from "react";

const Histroy = ({ histroy, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {histroy.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? "active" : ""}`}
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
    </div>
  );
};

export default Histroy;
