import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage}from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB_Zx1K5drgegt2pi-Nw9zTvgK_X-k3nwE",
    authDomain: "adityablog-8e1d8.firebaseapp.com",
    projectId: "adityablog-8e1d8",
    storageBucket: "adityablog-8e1d8.appspot.com",
    messagingSenderId: "311679044332",
    appId: "1:311679044332:web:1d5f37e6d48bf03654b3c9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

