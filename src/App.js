import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Header } from "components/Header";

function App() {
  return (
    <Router>
      {/* TODO: ADD SCROLL TO TOP WHEN PAGE CHANGES  */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
