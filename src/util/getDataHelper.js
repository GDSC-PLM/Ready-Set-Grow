const {
    getCoreTeamDb,
    getSpeakersDb,
    getSponsorsDb,
    getPartnersDb,
    getCoPresentersDb,
} = require("./firebase-init");

const sortStringTime = (speakers) => {
    // Sorry can't use Date objects here, our strings are not on a standard format
    // pls forgib bad code from here on

    // Convert each start time to number of mins since start of day
    // ex. "1:15 PM" becomes 795
    let sorted = speakers.map((speaker) => {
        const [ timeStr, ampm ] = speaker.timeOfEvent.split(" ");
        const [ hour, minutes ] = timeStr.split(":");

        const pmOffset = (ampm === "PM") ? 60 * 12 : 0; // If PM, offset is 720, else 0
        speaker.minsSinceDayStart = (parseInt(minutes) + ( parseInt(hour) * 60 ) + pmOffset);

        return speaker;
    });

    sorted.sort((a, b) => a.minsSinceDayStart - b.minsSinceDayStart);
    return sorted;
};

/**
 * Gets data from the coreTeam collection.
 * @param {Array} order A string array composed of position names which will control the ordering of the output.
 * @returns An object array containing data from the coreTeam collection from firebase.
 */
export async function getCoreTeam(order) {
    if (!order) {
        // You can define a custom sort by passing an array on the order parameter
        // or by modifying this default order array
        order = [
            "Faculty Adviser",
            "Chief Executive Officer",
            "Chief Operations Officer",
            "Chief Technology Officer",
            "Chief Creatives Officer",
            "Chief Community Development Officer",
            "Chief Finance Officer",
            "Consultant to CEO & CCDO",
            "Consultant to CFO & COO",
            "Consultant to CTO & CCO",
        ];
    }

    let coreTeam = await getCoreTeamDb();
    let coreTeamOrdered = [];
    let idx, data;
    for (let i = 0; i < coreTeam.length; ++i) {
        data = coreTeam[i].value;
        data = JSON.stringify(data)
            .replaceAll('name', 'position')
            .replaceAll('fullName', 'name');
        data = JSON.parse(data);
        idx = order.indexOf(data.position);

        if (idx >= 0) {
            coreTeamOrdered[idx] = data;
        } else {
            coreTeamOrdered[order.length + i] = data;
        }
    }
    // console.log("coreTeam: ", coreTeamOrdered);
    return coreTeamOrdered;
}

export async function getCoPresenters() {
    let coPresenters = await getCoPresentersDb();
    coPresenters = coPresenters.map(elem => elem.value);
    console.log("coPresenters: ", coPresenters);
    return coPresenters;
}

export async function getSpeakers() {
    let speakers = await getSpeakersDb();
    speakers = speakers.map(elem => elem.value);
    speakers = sortStringTime(speakers);
    console.log("speakers: ", speakers);
    return speakers;
}

export async function getSponsors() {
    let sponsors = await getSponsorsDb();
    sponsors = sponsors.map(elem => elem.value);
    console.log("sponsors", sponsors);
    return sponsors;
}

export async function getPartners() {
    let partners = await getPartnersDb();
    partners = partners.map(elem => elem.value);
    console.log("partners: ", partners);
    return partners;
}