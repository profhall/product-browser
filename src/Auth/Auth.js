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
    const [infoValidated, validateInfo] = useState(false);
    const [userLogin, setLoginInfo] = useState({});

    const db = firebase.firestore(app);
    let userDB = db.collection(`users`);

    const formValidation = (e) => {
        // console.log("input id", e.target.id);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (e.target.id === "password"){userLogin["password"] = e.target.value;}
        else if (e.target.id === "email"){userLogin["email"]= e.target.value;}

        setLoginInfo(userLogin);

        if (userLogin["password"] && userLogin["email"]
            && userLogin["password"].length >= 6 &&
            userLogin["email"].match(mailformat))
        {
            // console.log(userLogin['password'], userLogin['email'])
            validateInfo(true)
        }
        else { validateInfo(false) }

    };


    const gotoPage = (location) =>{

        navigate(location,false,[],false)
    };

    useEffect(async ()=> {
        await app.auth().onAuthStateChanged(setCurrentUser)
        console.log(currentUser ? ("user Set! ", currentUser):null)

        if(currentUser) {
             userDB.doc(currentUser.uid).get().then(   function(doc) {
                if (doc.exists) {
                    setUserProfile({...doc.data(),"uid": currentUser.uid});
                    // console.log("User Profile Set: ", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    // console.log("No such document!");
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
        console.log("Info Validated: ",infoValidated )

    },[infoValidated])


    useEffect(()=> {
        if(currentUserProfile) {
            setUserOrder({
                "uid": currentUser.uid,
                "address": currentUserProfile.address,
                "restrictions": currentUserProfile.dietary_restrictions
            })
        }
    },[currentUserProfile,])



    return (
        <AuthContext.Provider value={{currentUser, currentUserProfile, currentUserOrder,formValidation,userLogin,infoValidated, gotoPage , setUserProfile,setUserOrder}}>
            {children}
        </AuthContext.Provider>
    );

};