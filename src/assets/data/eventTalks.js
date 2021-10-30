const dummySpeaker1 = require("../images/jpg/dummy-speaker-1.jpg");
const dummySpeaker2 = require("../images/jpg/dummy-speaker-2.jpg");
const dummySpeaker3 = require("../images/jpg/dummy-speaker-3.jpg");


const eventTalks = [
    {
      title: "Why should you pursue career development while still a student?",
      speaker: {
        name: "Aanas Ali",
        organization: "Devcurate",
      },
      day: 1,
      time: "1:15 PM - 2:00 PM",
      picture: dummySpeaker1,
    },

    {
      title: "Upskill: Amplify your professional careers",
      speaker: {
        name: "Raphael Francis Quisumbing",
        organization: "Edukasyon.ph",
      },
      day: 1,
      time: "2:20 PM - 3:05 PM",
      picture: dummySpeaker2,
    },

    {
      title: "Land your Dream Job with Passion Project",
      speaker: {
        name: "Reimon Llorick Gutierrez",
        organization: "Ambient Digital",
      },
      day: 1,
      time: "3:35 PM - 4:20 PM",
      picture: dummySpeaker3,
    },
];

export function getEventTalks() {
    return eventTalks;
}