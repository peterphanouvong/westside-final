import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Fixtures from "./pages/Fixtures";
import Registrations from "./pages/Registrations";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Coaches from "./pages/about/Coaches";
import NotFound from "./pages/NotFound";
import Footer from "./components/common/Footer";

import Navbar from "./components/common/Navbar";
import MensReps from "./pages/reps/MensReps";
import WomensReps from "./pages/reps/WomensReps";
import JuniorsReps from "./pages/reps/JuniorsReps";
import SocialTraining from "./pages/socials/SocialTraining";
import SocialComps from "./pages/socials/SocialComps";

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
          <Route path="/reps/mens" component={MensReps} />
          <Route path="/reps/womens" component={WomensReps} />
          <Route path="/reps/juniors" component={JuniorsReps} />
          <Route path="/socials/training" component={SocialTraining} />
          <Route path="/socials/competitions" component={SocialComps} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
