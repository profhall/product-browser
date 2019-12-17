import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCNBeIBhapVNFOyrEUa0XU1XhGki_4Hx48",
    authDomain: "thetastyplantbasedkitchen.firebaseapp.com",
    databaseURL: "https://thetastyplantbasedkitchen.firebaseio.com",
    projectId: "thetastyplantbasedkitchen",
    storageBucket: "thetastyplantbasedkitchen.appspot.com",
    messagingSenderId: "518984031248",
    appId: "1:518984031248:web:ce97010c72c7e5bca1fe95",
    measurementId: "G-VF16B0BPR3"
});

export default app