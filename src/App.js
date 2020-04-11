import React from 'react';
import './App.css';

// import firebase from './firebase';
import TimesList from './components/TimesList';
import AddTimeEntryForm from './components/AddTimeEntryForm';

// firebase.firestore().collection('times').add({
// 	title: 'Rubix\'s Cube',
// 	time_seconds: 45,
// })

const App = () => {
  return (
    <div className="App">
		<h1>Just Clock It</h1>
		<TimesList />
		<AddTimeEntryForm />
    </div>
  );
}

export default App;
