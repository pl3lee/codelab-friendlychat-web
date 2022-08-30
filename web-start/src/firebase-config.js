/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyD6EA5PQZUoZTDvHMx70tLi2kPoY6DvFnY",
  authDomain: "friendlychat-da4c1.firebaseapp.com",
  projectId: "friendlychat-da4c1",
  storageBucket: "friendlychat-da4c1.appspot.com",
  messagingSenderId: "928960583723",
  appId: "1:928960583723:web:d4023eae9fead1713a726e"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}