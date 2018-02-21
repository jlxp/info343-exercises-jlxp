import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//config for a previously-created Firebase project
//we will all use this same project, but keep our
//data segmented by user id
var config = {
    apiKey: "AIzaSyBJVjs-oUPHBPAO_ChxXCm0tnK-xizjYkE",
    authDomain: "info343-tasks-83ce0.firebaseapp.com",
    databaseURL: "https://info343-tasks-83ce0.firebaseio.com",
    projectId: "info343-tasks-83ce0",
    storageBucket: "",
    messagingSenderId: "948217761537"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
