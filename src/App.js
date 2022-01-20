//import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Histroy from "./components/Histroy";
import StatusMessage from "./components/StatusMessage";
import React, { useState } from "react";

import "./style/root.scss";
import { calculateWinner } from "./helper";

const App = () => {
  const [histroy, setHistroy] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = histroy[currentMove];

  console.log("histroy", histroy);

  const winner = calculateWinner(current.board);

  const handleSquareclick = (position) => {
    if (current.board[position] || winner) {
      return;
    }

    setHistroy((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    // setIsXNext((prev) => !prev);
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareclick={handleSquareclick} />
      <Histroy histroy={histroy} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
