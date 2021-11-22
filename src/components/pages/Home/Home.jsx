import React, { Component } from "react";

// Components
import PreEventHero from "./sub-components/PreEventHero";
import InEventHero from "./sub-components/InEventHero";
import AboutTheEvent from "./sub-components/AboutTheEvent";
import Sponsors from "./sub-components/Sponsors";
import Schedule from "./sub-components/Schedule";

// Styling
import "./styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home-page">

        {/* Please choose only one between IneEventHero and PreEventHero to be displayed */}
        <InEventHero
            innerWidth={this.props.innerWidth}
            innerHeight={this.props.innerHeight}
          />

        {/* Please choose one of these to work on, and comment out the rest, so you can focus on
              making the stylings of your chosen component to be responsive */}
        <div id="aboutTheEvent">
          <AboutTheEvent />
        </div>

        <Sponsors />

        <div id="events">
          <Schedule
            innerWidth={this.props.innerWidth}
            innerHeight={this.props.innerHeight}
          />
        </div>
      </section>
    );
  }
}
