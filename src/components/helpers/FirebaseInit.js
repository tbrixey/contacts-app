import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBFSZ9zG2LOLoILA2ennm4I7lKnQM6bL00',
  authDomain: 'cremacontacts.firebaseapp.com',
  databaseURL: 'https://cremacontacts.firebaseio.com',
  projectId: 'cremacontacts',
  storageBucket: 'cremacontacts.appspot.com',
  messagingSenderId: '94202641228',
};

try {
firebase.initializeApp(config);
} catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
if (!/already exists/.test(err.message)) {
console.error('Firebase initialization error', err.stack);
}
}

const fb = firebase;

export default fb;
