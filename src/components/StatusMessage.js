import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next Player is{" "}
          <span className={current.isXnext ? "text-green" : "text-orange"}>
            {current.isXnext ? "X" : "O"}{" "}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green">X</span> <span>and</span>
          <span className="text-orange">O</span>tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
