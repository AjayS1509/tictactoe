//import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Histroy from "./components/Histroy";
import StatusMessage from "./components/StatusMessage";
import React, { useState } from "react";
import { calculateWinner } from "./helper";
import "./style/root.scss";

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [histroy, setHistroy] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);
  const current = histroy[currentMove];

  //console.log("histroy", histroy);

  const { winner, winningSquares } = calculateWinner(current.board);

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

  const onNewGame = () => {
    setHistroy(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareclick={handleSquareclick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start New Game
      </button>
      <h2 style={{ fontWeight: "noraml" }}>Current Game Histroy</h2>
      <Histroy histroy={histroy} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
