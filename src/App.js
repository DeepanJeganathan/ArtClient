import { Provider } from "react-redux";
import "./App.css";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Navigation from "./components/Nav";
import store from "./reducer/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/">
              <Main />
              <Gallery />
            </Route>
          </switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
