import "./App.css";
import GridBoard from "./components/gridboard";
import NextBlock from "./components/nextblock";
import ScoreBoard from "./components/scoreboard";
import Controls from "./components/controls";
import MessagePopup from "./components/messagepopup";

function App() {
  return (
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
  );
}

export default App;
