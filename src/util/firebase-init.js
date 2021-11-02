import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
} from "firebase/firestore";

// This will not work if you do not have a copy of our .env file locally
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY, 
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT
}

const firebaseApp = initializeApp(config);

const db = getFirestore();

const getPartnersDb = async () => {
    let partners, output;
    try {
        partners = await getDocs(
            collection(db, "partners")
        );
    } catch (e) {
        console.error(e);
    }

    if (partners) {
        output = await Promise.allSettled(partners.docs.map(async (partner) => {
            return partner.data();
        }));
    }

    return output || [];
}

const getSponsorsDb = async () => {
    let sponsors, output;
    try {
        sponsors = await getDocs(
            collection(db, "sponsors")
        );
    } catch (e) {
        console.error(e);
    }

    if (sponsors) {
        output = await Promise.allSettled(sponsors.docs.map(async (sponsor) => {
            return sponsor.data();
        }));
    }

    return output || [];
};

const getSpeakersDb = async () => {
    let speakers, output;
    try {
        speakers = await getDocs(
            collection(db, "speakers")
        );
    } catch (e) {
        console.error(e);
    }

    if (speakers) {
        output = await Promise.allSettled(speakers.docs.map(async (speaker) => {
            return speaker.data();
        }));
    }

    return output || [];
};

const getCoPresentersDb = async () => {
    let coPresenters, output;
    try {
        coPresenters = await getDocs(
            collection(db, "coPresenters")
        );
    } catch (e) {
        console.error(e);
    }

    if (coPresenters) {
        output = await Promise.allSettled(coPresenters.docs.map(async (presentor) => {
            return presentor.data();
        }));
    }

    return output || [];
}

/**
 * Asynchronously fetch the coreTeam collection from the firestore database.
 * @returns Returns an object array, each containing fullName, googleDeveloperProfile, image, and name. Returns an empty array if an error occurs.
 */
const getCoreTeamDb = async () => {
    let coreTeam, output;
    try {
        coreTeam = await getDocs(
            collection(db, "coreTeam")
        );
    } catch (e) {
        console.error(e);
    }

    if (coreTeam) {
        output = await Promise.allSettled(coreTeam.docs.map(async (member) => {
            return member.data();
        }));
    }

    return output || [];
};

export { getCoreTeamDb, getSpeakersDb, getSponsorsDb, getPartnersDb, getCoPresentersDb };