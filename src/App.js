import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Fixtures from "./pages/Fixtures";
import Registrations from "./pages/Registrations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Coaches from "./pages/about/Coaches";
import NotFound from "./pages/NotFound";

import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={Shop} />
          <Route path="/about/coaches" component={Coaches} />
          <Route path="/contact" component={Contact} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/registrations" component={Registrations} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
