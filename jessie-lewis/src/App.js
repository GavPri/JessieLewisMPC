import Header from "./components/navigation-bar/Header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page!</h1>} />
          <Route exact path="/about" render={() => <h1>About Page!</h1>} />
          <Route
            exact
            path="/services"
            render={() => <h1>Services Page!</h1>}
          />
          <Route exact path="/contact" render={() => <h1>Contact Page!</h1>} />
          <Route
            exact
            path="/faqs"
            render={() => <h1>Frequently Asked Questions!</h1>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
