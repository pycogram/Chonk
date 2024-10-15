import Home from "./home";
import logo1 from "./img/chonk.png";
import Navbar from "./nav";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const allImg = {
  tw: require("./soc-logo/twitter.png"),
  tg: require("./soc-logo/tg.png"),
  pf: require("./soc-logo/pumpfun.png"),
  ray: require("./soc-logo/ray.png"),
  dexs: require("./soc-logo/dexs.png"),
  dext: require("./soc-logo/dext.png"),
  pepeR1: require("./img/chonk.png"),
}

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar logo1={logo1} />
            <div className="AllPage">
              <Switch>
                <Route exact path="*">
                  <Home ObjImg={ allImg } />
                </Route>
              </Switch>
            </div>
      </div>
      </Router>
    );
}

export default App;
