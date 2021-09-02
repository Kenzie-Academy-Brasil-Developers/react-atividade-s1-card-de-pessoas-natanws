import logo from "./logo.svg";
import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <h1>Essas pessoas existem</h1>
      <Developer name="Gabriel" age="19" country="Brasil" />
      <Developer name="Filipe" age="28" country="Brasil" />
      <Developer name="Mariana" age="24" country="Itália" />
    </div>
  );
}

export default App;
