import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8BTxYdl2r9X4YpGItCYtrH4RZbzU3tbc",
    authDomain: "whatsupp-chat.firebaseapp.com",
    databaseURL: "https://whatsupp-chat.firebaseio.com",
    projectId: "whatsupp-chat",
    storageBucket: "whatsupp-chat.appspot.com",
    messagingSenderId: "986067042276",
    appId: "1:986067042276:web:5aa2e6814094abc54011f1",
    measurementId: "G-2C0FELFS98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
