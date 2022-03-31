const { initializeApp} = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore, collection, getDocs } = require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyC6iFZhTpofsslCOCMZDDJHEddX6BcCyNQ",
    authDomain: "selonn.firebaseapp.com",
    projectId: "selonn",
    storageBucket: "selonn.appspot.com",
    messagingSenderId: "657085130844",
    appId: "1:657085130844:web:a424fd51aa33ab6e935e99",
    measurementId: "G-H21V0ZE21F"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app,db, auth};

