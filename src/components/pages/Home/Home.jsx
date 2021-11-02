import React, { Component } from "react";
import PreEventHero from "./sub-components/PreEventHero";
import InEventHero from "./sub-components/InEventHero";
import AboutTheEvent from "./sub-components/AboutTheEvent";
import Sponsors from "./sub-components/Sponsors";
import Schedule from "./sub-components/Schedule";
import "./styles/home.css";


export default class Home extends Component {
  render() {
    return (
        <section className="home-page">
          {/* <InEventHero/> */}
          <PreEventHero/>
          <AboutTheEvent/>
          <Sponsors/>
          <Schedule/>
        </section>
    );
  }
}
