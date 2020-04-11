import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
	apiKey: "AIzaSyCROyHzpLm0rW4WxmR0OJnIb5hwYSS0Xxg",
	authDomain: "react-chat-3de88.firebaseapp.com",
	databaseURL: "https://react-chat-3de88.firebaseio.com",
	projectId: "react-chat-3de88",
	storageBucket: "react-chat-3de88.appspot.com",
	messagingSenderId: "222593763462",
	appId: "1:222593763462:web:20f727d6a54505b9676907",
	measurementId: "G-01JDWCBY4V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;