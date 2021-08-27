const firebaseConfig = {
  apiKey: "AIzaSyB550-PlvBV6TmEZlZfJEAb2p9zNpHWgoA",
  authDomain: "todolist1-d2b52.firebaseapp.com",
  projectId: "todolist1-d2b52",
  storageBucket: "todolist1-d2b52.appspot.com",
  messagingSenderId: "429922315404",
  appId: "1:429922315404:web:619004f10a0aad4a2a9fa9",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
