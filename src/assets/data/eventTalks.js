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
      typeOfEvent: "Ready"
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
      typeOfEvent: "Ready"
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
      typeOfEvent: "Ready"
    },


    {
      title: "Why should you pursue career development while still a student?",
      speaker: {
        name: "Aanas Ali 2",
        organization: "Devcurate",
      },
      day: 2,
      time: "1:15 PM - 2:00 PM",
      picture: dummySpeaker1,
      typeOfEvent: "Ready"
    },

    {
      title: "Upskill: Amplify your professional careers",
      speaker: {
        name: "Raphael Francis Quisumbing 2",
        organization: "Edukasyon.ph",
      },
      day: 2,
      time: "2:20 PM - 3:05 PM",
      picture: dummySpeaker2,
      typeOfEvent: "Set"
    },

    {
      title: "Land your Dream Job with Passion Project",
      speaker: {
        name: "Reimon Llorick Gutierrez 2",
        organization: "Ambient Digital",
      },
      day: 2,
      time: "3:35 PM - 4:20 PM",
      picture: dummySpeaker3,
      typeOfEvent: "Set"
    },

    {
      title: "Why should you pursue career development while still a student?",
      speaker: {
        name: "Aanas Ali 3",
        organization: "Devcurate",
      },
      day: 3,
      time: "1:15 PM - 2:00 PM",
      picture: dummySpeaker1,
      typeOfEvent: "Set"
    },

    {
      title: "Upskill: Amplify your professional careers",
      speaker: {
        name: "Raphael Francis Quisumbing 3",
        organization: "Edukasyon.ph",
      },
      day: 3,
      time: "2:20 PM - 3:05 PM",
      picture: dummySpeaker2,
      typeOfEvent: "Set"
    },

    {
      title: "Land your Dream Job with Passion Project 3",
      speaker: {
        name: "Reimon Llorick Gutierrez",
        organization: "Ambient Digital",
      },
      day: 3,
      time: "3:35 PM - 4:20 PM",
      picture: dummySpeaker3,
      typeOfEvent: "Grow"
    },


    {
      title: "Why should you pursue career development while still a student?",
      speaker: {
        name: "Aanas Ali 4",
        organization: "Devcurate",
      },
      day: 4,
      time: "1:15 PM - 2:00 PM",
      picture: dummySpeaker1,
      typeOfEvent: "Grow"
    },

    {
      title: "Upskill: Amplify your professional careers",
      speaker: {
        name: "Raphael Francis Quisumbing 4",
        organization: "Edukasyon.ph",
      },
      day: 4,
      time: "2:20 PM - 3:05 PM",
      picture: dummySpeaker2,
      typeOfEvent: "Grow"
    },

    {
      title: "Land your Dream Job with Passion Project 4",
      speaker: {
        name: "Reimon Llorick Gutierrez",
        organization: "Ambient Digital",
      },
      day: 4,
      time: "3:35 PM - 4:20 PM",
      picture: dummySpeaker3,
      typeOfEvent: "Grow"
    },



    {
      title: "Why should you pursue career development while still a student?",
      speaker: {
        name: "Aanas Ali 5",
        organization: "Devcurate",
      },
      day: 5,
      time: "1:15 PM - 2:00 PM",
      picture: dummySpeaker1,
      typeOfEvent: "Talks"
    },

    {
      title: "Upskill: Amplify your professional careers",
      speaker: {
        name: "Raphael Francis Quisumbing 5",
        organization: "Edukasyon.ph",
      },
      day: 5,
      time: "2:20 PM - 3:05 PM",
      picture: dummySpeaker2,
      typeOfEvent: "Talks"
    },

    {
      title: "Land your Dream Job with Passion Project 5",
      speaker: {
        name: "Reimon Llorick Gutierrez",
        organization: "Ambient Digital",
      },
      day: 5,
      time: "3:35 PM - 4:20 PM",
      picture: dummySpeaker3,
      typeOfEvent: "Talks"
    },
];

export function getEventTalks() {
    return eventTalks;
}