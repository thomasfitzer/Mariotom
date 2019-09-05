import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAr-x15Tf73ED0WNBYdOFAfzXDAR9DkVAI",
    authDomain: "marioplan-d24b9.firebaseapp.com",
    databaseURL: "https://marioplan-d24b9.firebaseio.com",
    projectId: "marioplan-d24b9",
    storageBucket: "",
    messagingSenderId: "276475696948",
    appId: "1:276475696948:web:dfbd29b429c03794937761"
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;