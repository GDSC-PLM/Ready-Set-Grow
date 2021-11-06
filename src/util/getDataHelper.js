const {
    getCoreTeamDb,
    getSpeakersDb,
    getSponsorsDb,
    getPartnersDb,
    getCoPresentersDb,
} = require("./firebase-init");

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