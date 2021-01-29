import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHWE6WSVHa8ER2JyQ7vntVUUqgJJGJs0E",
	authDomain: "signal-a91b7.firebaseapp.com",
	projectId: "signal-a91b7",
	storageBucket: "signal-a91b7.appspot.com",
	messagingSenderId: "1018463499045",
	appId: "1:1018463499045:web:bb469d00b35ea9ecfc60cc",
	measurementId: "G-KF9W01R1JD",
};

let app = firebase.initializeApp(firebaseConfig)

// let app;
// if (firebase.app.length === 0) {
// 	app = firebase.initializeApp(firebaseConfig);
// } else {
// 	app = firebase.app();
// }

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
