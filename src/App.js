import { Provider } from "react-redux";
import "./App.css";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Navigation from "./components/Nav";
import store from './reducer/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
        <Main />
        <Gallery />
      </Provider>
    </div>
  );
}

export default App;
