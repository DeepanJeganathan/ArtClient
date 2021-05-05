import "./App.css";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Navigation from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Gallery />
    </div>
  );
}

export default App;
