import Header from "./components/navigation-bar/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Faqs from "./pages/faqs/Faqs";
import ContactForm from "./pages/contact-me/ContactForm";
import AboutMe from "./pages/about-me/AboutMe";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/about" render={() => <AboutMe />} />
          <Route
            exact
            path="/services"
            render={() => <h1>Services Page!</h1>}
          />
          <Route exact path="/contact" render={() => <ContactForm />} />
          <Route exact path="/faqs" render={() => <Faqs />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
