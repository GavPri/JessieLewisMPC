import Header from "./components/navigation-bar/Header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page!</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
