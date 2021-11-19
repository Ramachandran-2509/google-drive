import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDSrgyqdTRBUSyACbpqMVLn3AGEW3UQEyg",
    authDomain: "drive-clone-cd94c.firebaseapp.com",
    projectId: "drive-clone-cd94c",
    storageBucket: "drive-clone-cd94c.appspot.com",
    messagingSenderId: "960120865561",
    appId: "1:960120865561:web:138bc951086c2a4a4c3b88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }