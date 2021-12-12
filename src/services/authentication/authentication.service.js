import * as firebase from "firebase";

export const LoginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword("admin@gmail.com", "admin123");
};
