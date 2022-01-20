import "./App.css";
import "./index.css";
import GridSquare from "./components/gridsquare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris Redux</h1>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;
