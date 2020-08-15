import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBjJwfeYhoXhAZ3E7Hv--NXP9gE4EmVwDU",
  authDomain: "karaoq-fe997.firebaseapp.com",
  databaseURL: "https://karaoq-fe997.firebaseio.com",
  projectId: "karaoq-fe997",
  storageBucket: "karaoq-fe997.appspot.com",
  messagingSenderId: "65949557478",
  appId: "1:65949557478:web:9dc24c56103cec6e9bd127"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig)

export default fire;