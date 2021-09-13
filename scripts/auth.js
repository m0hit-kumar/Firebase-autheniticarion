import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApDLiOvCkuhozs-7_ebxCkeYRbaaPaClw",
  authDomain: "opp-online-placement-portal.firebaseapp.com",
  projectId: "opp-online-placement-portal",
  storageBucket: "opp-online-placement-portal.appspot.com",
  messagingSenderId: "1018033370321",
  appId: "1:1018033370321:web:063832ae90f0b9bb6c01f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signupform = document.querySelector("#signup-form");
// console.log(signupform);
signupform.addEventListener("submit", (e) => {
  e.preventDefault();

  //get user info

  const email = signupform["signup-email"].value;
  const password = signupform["signup-password"].value;

  console.log(email, password);

  // signup the users

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred);
  });
});
