import {meals} from '../data'

import app from "../fbase"
import * as firebase from "firebase/app";
import 'firebase/firestore';
const db = firebase.firestore(app);

export async function createRecipesCollection () {
    meals.map((meal)=>{
    // Add a new document in collection "cities"
        db.collection("recipes").doc(meal.name).set(meal)
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    })

}

