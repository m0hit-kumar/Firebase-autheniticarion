import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyApDLiOvCkuhozs-7_ebxCkeYRbaaPaClw",
  authDomain: "opp-online-placement-portal.firebaseapp.com",
  projectId: "opp-online-placement-portal",
  storageBucket: "opp-online-placement-portal.appspot.com",
  messagingSenderId: "1018033370321",
  appId: "1:1018033370321:web:063832ae90f0b9bb6c01f0",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
