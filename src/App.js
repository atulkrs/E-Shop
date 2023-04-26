import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout1 from "./Checkout1";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout1">
            <Header />
            <Checkout1 />
          </Route>

          <Route path="/">    
            <Header />
            <Home />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;

