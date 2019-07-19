import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCh12ScMzormjq9Ew6Ic36EMZ8R19BLfwY",
  authDomain: "web-technology-a7fe3.firebaseapp.com",
  databaseURL: "https://web-technology-a7fe3.firebaseio.com",
  projectId: "web-technology-a7fe3",
  storageBucket: "web-technology-a7fe3.appspot.com",
  messagingSenderId: "829374897864"
};
firebase.initializeApp(config);

export default firebase;