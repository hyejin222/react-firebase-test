import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
	apiKey: "AIzaSyBZvb_0EQ6MjFPVLFr6KoJjhNq3gqnXTPE",
	authDomain: "react-firebase-481c6.firebaseapp.com",
	databaseURL: "https://react-firebase-481c6.firebaseio.com",
	projectId: "react-firebase-481c6",
	storageBucket: "react-firebase-481c6.appspot.com",
	messagingSenderId: "239294961028",
	appId: "1:239294961028:web:e5f2890b56bf4db65279d1",
	measurementId: "G-NKHJ382MQ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;