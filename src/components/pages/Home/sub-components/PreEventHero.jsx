import React from "react";
import { Link } from "react-router-dom";
// External Libraries
import Countdown, {zeroPad} from 'react-countdown';
// Stylings
import "../styles/preEventHero.css";
//Assets
import coloredBars from "../../../../assets/images/png/colored-bars.png";
import coloredBarsSmall from "../../../../assets/images/png/colored-bars(small).png";

const PreEventHero = (props) => {
    const renderCountdownTimer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            console.log("finish");
        } else {
            return (
                <table className="count-down">
                <thead>
                    <tr>
                    <th scope="col" className="attr">Days</th>
                    <th scope="col"/>
                    <th scope="col" className="attr">Hours</th>
                    <th scope="col"/>
                    <th scope="col" className="attr">Minutes</th>
                    <th scope="col"/>
                    <th scope="col" className="attr">Seconds</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="value">{zeroPad(days)}</td>
                    <td>&nbsp;:&nbsp;</td>
                    <td className="value">{zeroPad(hours)}</td>
                    <td>&nbsp;:&nbsp;</td>
                    <td className="value">{zeroPad(minutes)}</td>
                    <td>&nbsp;:&nbsp;</td>
                    <td className="value">{zeroPad(seconds)}</td>
                    </tr>
                </tbody>
                </table>
            );
        }
    };

    const dateOfEvent = new Date(2021, 10, 22, 13, 0 , 0);


    const handleScrollClick = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        let location;
        
        try {
          location = document.querySelector("#aboutTheEvent").offsetTop;
          console.log(location);
        }
        catch (ex) {
          location = 1958;
        }
    
        console.log(location);
        
        window.scrollTo({
          left: 0,
          top: location
        });
      }
    
    

    return (
    <div className="pre-event-hero">
        <div className="colored-bars">
            <img src={props.innerWidth > 1024 ? coloredBars : coloredBarsSmall } /> 
        </div>

        <div className="coming-soon">
            <h3>Coming Soon</h3>

            <p>
            A week-long series of career and profile-building filled with webinars and workshops. 
            Get ready for exclusive events, set up new goals, and grow with priceless learnings. 
            <br /><br />
            Stay Tuned.{" "}
            </p>

            <Countdown date={dateOfEvent} renderer={renderCountdownTimer} />

            <div className="btn-container">
                <Link to="/register" className="register-btn" type="button">
                    Register Now
                </Link>
                <a className="learn-more-btn" type="button" onMouseUp={handleScrollClick}>
                    Learn More
                </a>
            </div>
        </div>
    </div>
    );
};

export default PreEventHero;
