import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPd99wkAtZLvyArrJm8mBr6OIQ5gaSuVc",
  authDomain: "mealstogo-bef3e.firebaseapp.com",
  projectId: "mealstogo-bef3e",
  storageBucket: "mealstogo-bef3e.appspot.com",
  messagingSenderId: "273213253973",
  appId: "1:273213253973:web:3b33a33cb0a95da26de7dc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const LoginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword("admin@gmail.com", "admin123");
};
