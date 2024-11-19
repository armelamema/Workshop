// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcfOvv7pNG-VUJpmGvV0_zt45dR_BHYmU",
    authDomain: "armela-ccdca.firebaseapp.com",
    projectId: "armela-ccdca",
    storageBucket: "armela-ccdca.firebasestorage.app",
    messagingSenderId: "801892132793",
    appId: "1:801892132793:web:85a6225006ac382dab7868",
    measurementId: "G-SVY53HNYV4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});
          