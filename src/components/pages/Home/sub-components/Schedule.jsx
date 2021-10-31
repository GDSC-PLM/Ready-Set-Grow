import React, { Component } from "react";
import { FiClock } from "react-icons/fi";
import { getEventTalks } from "../../../../assets/data/eventTalks";
import background from "../../../../assets/images/png/colored-arrows.png"
import "../styles/schedule.css";

export default class Schedule extends Component {
  state = {
    eventTalks: getEventTalks(),
    selectedDay: 1,
    displayedTalks: [],
  };

  //=== LifeCycle Hooks ===
  componentDidMount = () => {
    this.setTalksToBeDisplayed();
    this.setTalksToBeDisplayed(1);
  };

  setTalksToBeDisplayed = (selectedDay) => {
    let talks = {...this.state.eventTalks};
    let arrayOfTalks = Object.values(talks);

    console.log(typeof(arrayOfTalks));
    let talksToDisplay = arrayOfTalks.filter((talk) => talk.day === selectedDay);

    this.setState({ displayedTalks: talksToDisplay });
  };

  setSelectedDay = (day) => {
    this.setState({selectedDay: day});
    this.setTalksToBeDisplayed(day);
  }

  eventDates = [
    { dayNumber: 1, date: "Nov 22" },
    { dayNumber: 2, date: "Nov 23" },
    { dayNumber: 3, date: "Nov 24" },
    { dayNumber: 4, date: "Nov 25" },
    { dayNumber: 5, date: "Nov 26" },
  ];

  renderDaySelector = () => {
    return (
      <div className="day-selector-container">
        {this.eventDates.map((item) => {
          return (
            <div className="day-option" onClick={() => this.setSelectedDay(item.dayNumber)}>
              <div className="day-number">DAY {item.dayNumber}</div>
              <div className="month-n-date">{item.date}</div>
              <div className={item.dayNumber === this.state.selectedDay ? "highlight-container active" : "highlight-container"}/>
            </div>
          );
        })}
      </div>
    );
  };

  renderSpeakerCards = () => {
    return (
      <div className="speakers-of-the-day">
        {this.state.displayedTalks.map((talk) => {
          return (
            <div className="speaker">
              <div className="photo-container">
                <img src={talk.picture.default} alt="speaker" />
              </div>
              <div className="talk-details-container">
                <span className="tag">Talk</span>
                <h3 className="speaker-name">{talk.speaker.name}</h3>
                <p className="organization">{talk.speaker.organization}</p>
                <div className="talk-title">{talk.title}</div>
                <div className="talk-time">
                  <FiClock />
                  {talk.time}
                </div>
              </div>
            </div>
          );
        })}

        {/* 
        <div className="speaker">
          <div className="photo-container"></div>
          <div className="talk-details-container">
            <span className="tag">Talk</span>
            <h3 className="speaker-name">Raphael Francis Quisimbing</h3>
            <p className="organization">Edukasyon.ph</p>
            <div className="talk-title">
              Upskill: Amplify your professional careers
            </div>
            <div className="talk-time">
              <FiClock />
              1:15 PM - 2:00 PM
            </div>
          </div>
        </div>

        <div className="speaker">
          <div className="photo-container"></div>
          <div className="talk-details-container">
            <span className="tag">Talk</span>
            <h3 className="speaker-name">Reimon Llorick Gutierrez</h3>
            <p className="organization">Ambient Digital</p>
            <div className="talk-title">
              Land your Dream Job with Passion Project
            </div>
            <div className="talk-time">
              <FiClock />
              1:15 PM - 2:00 PM
            </div>
          </div>
        </div> */}
      </div>
    );
  };

  render() {
    return (
      <div className="schedule">
        <img src={background} className="background-img" alt="Background" />

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
