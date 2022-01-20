import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMoveLeft = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMoveLeft &&
        `Next Player is ${current.isXnext ? "X" : "O"}`}
      {!winner && noMoveLeft && "X and O is tied"}
    </h2>
  );
};

export default StatusMessage;