import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6fU-3WEmr1bxr-VJ9Ce5pWYJ1-gUFxoU",
    authDomain: "clone-2b3f9.firebaseapp.com",
    projectId: "clone-2b3f9",
    storageBucket: "clone-2b3f9.appspot.com",
    messagingSenderId: "618310343470",
    appId: "1:618310343470:web:4373c4a40e01dddf7238bf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }

