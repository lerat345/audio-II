

import * as firebase from 'firebase'
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFiBYFFs0ABDHgUSfMFBmUr-j0A3nAv3Y",
  authDomain: "audio-app-46a6b.firebaseapp.com",
  projectId: "audio-app-46a6b",
  storageBucket: "audio-app-46a6b.appspot.com",
  messagingSenderId: "739653851974",
  appId: "1:739653851974:web:a01d630e45fee5cfd2e347",
  measurementId: "G-ZCB2MQKJXM"
};

firebase.initializeApp(firebaseConfig);


export{firebase};