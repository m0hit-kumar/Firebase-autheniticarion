import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firefirebasejs/9.0.2/firebase-firestore.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyApDLiOvCkuhozs-7_ebxCkeYRbaaPaClw",
  authDomain: "opp-online-placement-portal.firebaseapp.com",
  projectId: "opp-online-placement-portal",
  storageBucket: "opp-online-placement-portal.appspot.com",
  messagingSenderId: "1018033370321",
  appId: "1:1018033370321:web:063832ae90f0b9bb6c01f0",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// db.settings({ timestampsInSnapshots: true });

const signupform = document.querySelector("#signup-form");
// console.log(signupform);
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info

  const email = signupform["signup-email"].value;
  const password = signupform["signup-password"].value;

  console.log(email, password);

  // signup the users

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(erroe.message);
    });
});
