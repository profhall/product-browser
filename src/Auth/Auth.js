import  React, {useEffect, useState} from "react"
import app from "../fbase"
import {navigate} from "hookrouter";
import * as firebase from "firebase/app";
import 'firebase/firestore';

export const AuthContext = React.createContext();



export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserProfile, setUserProfile] = useState(null)
    const [currentUserOrder, setUserOrder] = useState(null)
    const db = firebase.firestore(app);
    let userDB = db.collection(`users`);

    const prevPage = (location) =>{

        navigate(location,false,[],false)
    }
    const nextPage = (location) =>{

        navigate(location,false,[],false)
    }

    useEffect(()=> {
        app.auth().onAuthStateChanged(setCurrentUser)
        console.log(currentUser ? ("user Set! ", currentUser):null)

        if(currentUser) {
             userDB.doc(currentUser.uid).get().then(   function(doc) {
                if (doc.exists) {
                    setUserProfile({...doc.data(),"uid": currentUser.uid});
                    console.log("User Profile Set: ", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                return () => {
                    // removing the listener when props.x changes
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }


    },[currentUser])

    useEffect(()=> {
        console.log("User Order", currentUserOrder)
        console.log("User Profile", currentUserProfile)

    },[currentUserOrder])


    useEffect(()=> {
        if(currentUserProfile) {
            setUserOrder({
                "uid": currentUser.uid,
                "meals": [],
                "address": currentUserProfile.address,
                "restrictions": currentUserProfile.dietary_restrictions
            })
        }
    },[currentUserProfile])



    return (
        <AuthContext.Provider value={{currentUser, currentUserProfile, currentUserOrder,nextPage, prevPage , setUserProfile,setUserOrder}}>
            {children}
        </AuthContext.Provider>
    );

};