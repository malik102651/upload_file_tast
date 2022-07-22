import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEv1OCTVY6PBMlNvbvsE426_PnTn-osqI",
    authDomain: "login-e7ae4.firebaseapp.com",
    projectId: "login-e7ae4",
    storageBucket: "login-e7ae4.appspot.com",
    messagingSenderId: "926158723937",
    appId: "1:926158723937:web:1196e3c208d39b88a00320"
  };
  
const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore();