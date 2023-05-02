import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB3dReaXFg3McYbAUq2r_3SIpvFuG7Oog4",
    authDomain: "mapping-ae5ce.firebaseapp.com",
    databaseURL: "https://mapping-ae5ce-default-rtdb.firebaseio.com",
    projectId: "mapping-ae5ce",
    storageBucket: "mapping-ae5ce.appspot.com",
    messagingSenderId: "191039259954",
    appId: "1:191039259954:web:818e6ccfef372f1c14c32b",
    measurementId: "G-K5RF25871R",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
//const database = getDatabase(app);
