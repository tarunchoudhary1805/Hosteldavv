
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HelpMeOut from './components/HelpMeOut';
import Rnth from './components/Rnth';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Navbar title="Davv Hostelers" aboutText="About Davv Hostelers" />



        <div className="container my-3">

          <Switch>


            <Route exact path="/">

              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/HelpMeOut">
              <HelpMeOut />
            </Route>

            <Route exact path="/Rnth">
              <Rnth />
            </Route>


          </Switch>


        </div>

      </Router>



    </>
  );
}

export default App;
