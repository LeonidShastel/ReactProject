import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDVpq8CMCHjFXPFdDmoDWm7l5Wu8ZTyHAI",
  authDomain: "first-project-react-5487b.firebaseapp.com",
  databaseURL: "https://first-project-react-5487b-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
