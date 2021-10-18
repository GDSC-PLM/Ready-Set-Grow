import React from "react";
import Countdown, {zeroPad} from 'react-countdown';
import "../styles/preEventHero.css";
import coloredBars from "../../../../assets/images/png/colored-bars.png";

const PreEventHero = () => {
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

    const dateOfEvent = new Date(2021, 10, 22, 8, 0 , 0);
      
    return (
    <div className="pre-event-hero">
        <div className="colored-bars">
        <img src={coloredBars} alt="Colored Bars" />
        </div>

        <div className="coming-soon">
        <h3>Coming Soon</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            metus elementum, sollicitudin enim ut, elementum purus.{" "}
        </p>

        <Countdown date={dateOfEvent} renderer={renderCountdownTimer} />

        <div className="btn-container">
            <a className="register-btn" type="button">
            Register Now
            </a>
            <a className="learn-more-btn" type="button">
            Learn More
            </a>
        </div>
        </div>
    </div>
    );
};

export default PreEventHero;
