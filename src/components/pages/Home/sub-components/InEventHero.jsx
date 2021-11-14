import React from "react";
import { Link } from "react-router-dom";
// Assets
import coloredBars2 from "../../../../assets/images/png/Illustration.png";
import coloredBarsSmall2 from "../../../../assets/images/png/colored-bars-2(small).png";
// Stylings
import "../styles/inEventHero.css";


const InEventHero = (props) => {
  // console.log(props.innerWidth);
  // console.log(props.innerHeight);

  return (
    <div className="in-event-hero">
      
      <div className="colored-bars-2">
        {/* The background image will change if the screen width is 1024px or smaller */}
        <img src={props.innerWidth > 1024 ? coloredBars2 : coloredBarsSmall2} alt="Colored Bars" />
      </div>

      <div className="event-details">
        {/* The layout of event name will change if the screen width is 1024px or smaller */}
        {props.innerWidth > 1024 ? (
          <div className="event-name">
            <span>Ready<br/></span> 
            <span>Set<br/></span> 
            <span>Grow.</span>
          </div>) : (
          <div className="event-name">
            <span>Ready</span>&nbsp; 
            <span>Set</span>&nbsp; 
            <span>Grow</span>&nbsp;
          </div>
          )}

        <p className="date-of-event">
          November 22 - November 26, 2021
        </p>

        <p className="tagline">
          { props.innerWidth > 1024 ? (
              <nobr>Embracing Diversity and Transforms Community Through Technology</nobr>
            ) : (
              "Embracing Diversity and Transforms Community Through Technology"
            )
          }   
        </p>


        <div className="btn-container">
          <Link to="/register" className="register-btn" href="">
            Register Now
          </Link>
          <a className="learn-more-btn" href="">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default InEventHero;
