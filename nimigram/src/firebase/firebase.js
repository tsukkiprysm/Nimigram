import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDF2dnYg5XE9BC0LKiZPAYTOhEc8BF5TaQ",
    authDomain: "nimigram.firebaseapp.com",
    projectId: "nimigram",
    storageBucket: "nimigram.firebasestorage.app",
    messagingSenderId: "243469675194",
    appId: "1:243469675194:web:cf1ce436cb47da4f89f083",
    measurementId: "G-KJTLJQ1WEB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};