import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBq0y4JtSPxpLXsTuUfQM1Bp6XPKzhEQGA",
  authDomain: "comfy-store-eb137.firebaseapp.com",
  projectId: "comfy-store-eb137",
  storageBucket: "comfy-store-eb137.appspot.com",
  messagingSenderId: "490489336580",
  appId: "1:490489336580:web:74ea3d10ee1f9db32eb651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)