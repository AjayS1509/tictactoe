//import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import React, { useState } from "react";

import "./style/root.scss";
import { calculateWinner } from "./helper";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  //console.log("board render");
  const winner = calculateWinner(board);
  //console.log(winner);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? "X" : "O"}`;

  const handleSquareclick = (position) => {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });
    setIsXNext((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareclick={handleSquareclick} />
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
