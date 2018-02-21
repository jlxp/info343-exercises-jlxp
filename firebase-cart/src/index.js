import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//TODO: paste your Firebase app config and initializeApp call here


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
