import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuED-CxFYMwUDi80Rnli5IOchnoMolQC8",
    authDomain: "whatsapp-596fa.firebaseapp.com",
    projectId: "whatsapp-596fa",
    storageBucket: "whatsapp-596fa.appspot.com",
    messagingSenderId: "356783402988",
    appId: "1:356783402988:web:125746d6a5421bdc4edac9"
  };

  const app=!firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) : 
  firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db , auth , provider} ;