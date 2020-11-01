import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaeD09JypEPFUzrtdaPBjsMq35bYNPEv4",
    authDomain: "spacex-explorer-f3a03.firebaseapp.com",
    databaseURL: "https://spacex-explorer-f3a03.firebaseio.com",
    projectId: "spacex-explorer-f3a03",
    storageBucket: "spacex-explorer-f3a03.appspot.com",
    messagingSenderId: "773016646138",
    appId: "1:773016646138:web:02d3d6c01d82ccfda9f443"
};

firebase.initializeApp(firebaseConfig);

// local variables
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


// auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

// export our auth functions and observer
export { login, logout, auth }