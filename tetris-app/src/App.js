import "./App.css";
import GridBoard from "./components/gridboard";
import NextBlock from "./components/nextblock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
    </div>
  );
}

export default App;
