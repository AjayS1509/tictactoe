//import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
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

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXNext ? "X" : "O"}`;

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
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareclick={handleSquareclick} />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
