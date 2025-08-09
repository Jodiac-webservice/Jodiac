import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBNRm2Fq15VOieV8gHYdM44EojGGRkdy_g",
  authDomain: "jodiac-9a49f.firebaseapp.com",
  projectId: "jodiac-9a49f",
  storageBucket: "jodiac-9a49f.firebasestorage.app",
  messagingSenderId: "988245425720",
  appId: "1:988245425720:web:bcb467ef63688bd69330cd",
  measurementId: "G-R1GGT283YJ"
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);