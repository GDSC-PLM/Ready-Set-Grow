import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// ==== Components ====
import Navbar from "./components/common/Navbar/Navbar.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Events from "./components/pages/Events/Events.jsx";
import AboutUs from "./components/pages/AboutUs/AboutUs.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import { getCoreTeam, getPartners, getSponsors, getSpeakers, getCoPresenters } from "./util/getDataHelper.js";
export default class App extends Component {
  componentDidMount() {
    getCoreTeam();
    getPartners();
    getSponsors();
    getSpeakers();
    getCoPresenters();
  }

  render() {
    return (
      <main>
          <BrowserRouter>
            <Navbar/>

            <Switch>
                  <Route path="/" exact render={(props) => <Home/>}/>
                  <Route exact path="/events" component={Events}/> 
                  <Route exact path="/about-us" component={AboutUs}/> 
                  <Route exact path="/not-found" component={NotFound}/> 
                  
                  <Redirect from="/home" exact to="/"/>
                  <Redirect to="/not-found"/>
            </Switch>

            <Footer/>
          </BrowserRouter>
      </main>
    )
  }
}

