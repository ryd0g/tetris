import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../actions";
import "./scoreboard.css";

export default function ScoreBoard(props) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver } = game;
  return (
    <div className="score-board">
      <div className="score">Score: {score}</div>
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "⏸" : "⏯"}
      </button>
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        🔁
      </button>
    </div>
  );
}
