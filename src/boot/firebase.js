// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBU5I9wMTKCrvbNnStGurd7ppiZ7qhr770",
authDomain: "demquotes-2be8f.firebaseapp.com",
databaseURL: "https://demquotes-2be8f.firebaseio.com",
projectId: "demquotes-2be8f",
storageBucket: "demquotes-2be8f.appspot.com",
messagingSenderId: "907866213585",
appId: "1:907866213585:web:fc21626b85f10a3b4609f0"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }