import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);

        return result;
    }
}