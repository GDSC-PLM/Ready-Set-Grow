import React, { Component } from "react";
// External Libraries
import { FiClock } from "react-icons/fi";
// Assets
import { getEventTalks } from "../../../../assets/data/eventTalks";
import { getSpeakers } from "../../../../util/getDataHelper";
import background from "../../../../assets/images/png/colored-arrows.png"
// Stylings
import "../styles/schedule.css";

export default class Schedule extends Component {
  state = {
    // eventTalks: getSpeakers(),
    eventTalks: [],
    selectedDay: 1,
    displayedTalks: [],
  };

  //=== LifeCycle Hooks ===
  componentDidMount = async () => {
    //This method will be called once the website has been loaded
    this.setState({ eventTalks: await getSpeakers() });
    this.setTalksToBeDisplayed(1);
  };

  // This method will set the talks to be displayed based on the the day that the user has selected
  setTalksToBeDisplayed = (selectedDay) => {
    let talks = {...this.state.eventTalks};
    let arrayOfTalks = Object.values(talks);
    let talksToDisplay = arrayOfTalks.filter((talk) => talk.day === selectedDay && talk.confirmed != false);

    this.setState({ displayedTalks: talksToDisplay });
  };

  // This method will identify which day/date that the user has selected in the Day Selector
  setSelectedDay = (day) => {
    this.setState({selectedDay: day});
    this.setTalksToBeDisplayed(day);
  }

  // This is the array of objects that contains the event dates. Dont remove or modify
  eventDates = [
    { dayNumber: 1, date: "Nov 22" },
    { dayNumber: 2, date: "Nov 23" },
    { dayNumber: 3, date: "Nov 24" },
    { dayNumber: 4, date: "Nov 25" },
    { dayNumber: 5, date: "Nov 26" },
  ];

  // This method will render the Day Selector 
  renderDaySelector = () => {
    return (
      <div className="day-selector-container">
        {this.eventDates.map((item) => {
          return (
            <div className="day-option" onClick={() => this.setSelectedDay(item.dayNumber)}>
              <div className="day-number">DAY {item.dayNumber}</div>
              { this.props.innerWidth > 540 ? <div className="month-n-date">{item.date}</div> : <></> }
              <div className={item.dayNumber === this.state.selectedDay ? "highlight-container active" : "highlight-container"}/>
            </div>
          );
        })}
      </div>
    );
  };

  // This will render the cards of each speaker that contains information about them and the
  // title of their talk.
  renderSpeakerCards = () => {
    return (
      <div className="speakers-of-the-day">
        {this.state.displayedTalks.map((talk) => {
          return (
            <div className="speaker">
              <div className="photo-container">
                <img src={talk.image} alt="speaker" />
              </div>
              <div className="talk-details-container">
                <span className="tag">{talk.typeOfEvent}</span>
                <h3 className="speaker-name">{talk.name}</h3>
                <p className="organization">{talk.company}</p>
                <div className="talk-title">{talk.titleOfTalk}</div>
                <div className="talk-time">
                  <FiClock />
                  {talk.timeOfEvent}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="schedule">
        {/* <img src={background} className="background-img" alt="Background" /> */}

        <div className="main-content">
          <h2>A Week of Career Building</h2>
          <p>
            Browse the agendas and speakers to find the most interesting
            discussions for you.
          </p>
          {this.renderDaySelector()}
          {this.renderSpeakerCards()}
        </div>
        
      </div>
    );
  }
}
