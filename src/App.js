import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// ==== Components ====
import Navbar from "./components/common/Navbar/Navbar.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Events from "./components/pages/Events/Events.jsx";
import AboutUs from "./components/pages/AboutUs/AboutUs.jsx";
import Form from "./components/pages/Form/Form.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import { getCoreTeam, getPartners, getSponsors, getSpeakers, getCoPresenters } from "./util/getDataHelper.js";


export default class App extends Component {
  // This is the state where the values/keys that can be used in different components are stored
  // The value of innerWidth and innerHeight are just default values.
  state = {
    innerWidth: 1440,
    innerHeight: 720
  }

  componentDidMount() {
    // These functions will be called as the website is loaded
    this.getInnerWidthAndHeight();
    getCoreTeam();
    getPartners();
    getSponsors();
    getSpeakers();
    getCoPresenters();

    // === This function will be called when you resize the window or clicked anywhere on the website ===
    window.addEventListener("resize", this.getInnerWidthAndHeight);
    window.addEventListener("click", this.getInnerWidthAndHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getInnerWidthAndHeight);
    window.removeEventListener("click", this.getInnerWidthAndHeight);
  }

  // This function will get the height and width of the window
  getInnerWidthAndHeight = () => {
    this.setState({ innerWidth: window.innerWidth , innerHeight: window.innerHeight });
  }

  render() {
    return (
      <main>
          <BrowserRouter>
            <Navbar/> 

            <Switch>
                  <Route path="/" exact render={(props) => <Home 
                      innerHeight={this.state.innerHeight}
                      innerWidth={this.state.innerWidth}
                    />}/>
                  <Route exact path="/form" component={Form}/> 
                  
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

