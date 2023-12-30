import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD29oiBQ4ZxTxyDR6otjJJGz11YEuHQtac",
  authDomain: "login-399b2.firebaseapp.com",
  projectId: "login-399b2",
  storageBucket: "login-399b2.appspot.com",
  messagingSenderId: "67102548298",
  appId: "1:67102548298:web:c7487149bdc196d2c8a1b3"
};

export const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase)