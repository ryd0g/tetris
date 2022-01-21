import "./App.css";
import GridBoard from "./components/gridboard";
import NextBlock from "./components/nextblock";
import ScoreBoard from "./components/scoreboard";
import Controls from "./components/controls";

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
    </div>
  );
}

export default App;
