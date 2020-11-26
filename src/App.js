import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Coaches from "./pages/Coaches";
import Shop from "./pages/Shop";
import Fixtures from "./pages/Fixtures";
import Registrations from "./pages/Registrations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";

import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/contact" component={Contact} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/registrations" component={Registrations} />
        <Route path="/teams" component={Teams} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
