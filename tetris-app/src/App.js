import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import GridBoard from "./components/gridboard";
import NextBlock from "./components/nextblock";
import ScoreBoard from "./components/scoreboard";
import Controls from "./components/controls";
import MessagePopup from "./components/messagepopup";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Tetris Redux</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
