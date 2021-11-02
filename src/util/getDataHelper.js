const {
    getCoreTeamDb,
    getSpeakersDb,
    getSponsorsDb,
    getPartnersDb,
    getCoPresentersDb,
} = require("./firebase-init");

export async function getCoreTeam(order) {
    if (!order) {
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
        idx = order.indexOf(data.name);

        if (idx >= 0) {
            coreTeamOrdered[idx] = data;
        } else {
            coreTeamOrdered[order.length + i] = data;
        }
    }
    console.log("coreTeam: ", coreTeamOrdered);
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