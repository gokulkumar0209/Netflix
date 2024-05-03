// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const {
	VITE_FIREBASE_APIKEY,
	VITE_FIREBASE_AUTHDOMAIN,
	VITE_FIREBASE_PROJECTID,
	VITE_FIREBASE_STORAGE_BUCKET,
	VITE_FIREBASE_MESSAGING_SENDER_ID,
	VITE_FIREBASE_APPID,
} = import.meta.env;
const firebaseConfig = {
	apiKey: VITE_FIREBASE_APIKEY,
	authDomain: VITE_FIREBASE_AUTHDOMAIN,
	projectId: VITE_FIREBASE_PROJECTID,
	storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: VITE_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
