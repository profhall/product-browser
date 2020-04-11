import  React, {useEffect, useState} from "react"
import app from "../fbase"
import {navigate} from "hookrouter";
import * as firebase from "firebase/app";
import 'firebase/firestore';

export const AuthContext = React.createContext();

function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserProfile, setUserProfile] = useState(null)
    const [currentUserOrder, setUserOrder] = useState(null)
    const [infoValidated, validateInfo] = useState(false);
    const [userLogin, setLoginInfo] = useState({});
    const [adminStuff, setAdminStuff] = useState({orders:[], recipes: []});
    const [url, setURL] = useState(window.location.href);

    const db = firebase.firestore(app);
    let userDB = db.collection(`users`);

    let odersDB = db.collection(`orders`);
    let recipesDB = db.collection(`recipes`);

    const gotoPage = (location) =>{

        navigate(location,false,[],false)
    };

    useEffect( ()=> {
        async function userStateChange() {
            await app.auth().onAuthStateChanged(setCurrentUser)
            // console.log(currentUser ? `user Set!  ${currentUser}`:null)

        }
        userStateChange();


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
        if(currentUserProfile) {
            setUserOrder({
                "uid": currentUser.uid,
                "address": currentUserProfile.address,
                "restrictions": currentUserProfile.dietary_restrictions,
                "meals":[]
            })
        }

        // if (currentUserProfile && currentUserProfile.admin){
            getAdminStuff()
        // }
    },[currentUserProfile,])

    useEffect(()=> {
    },[adminStuff,])

    function getAdminStuff ()  {
        console.log("getting stufff admin")
        getRecipes()
        if (currentUserProfile && currentUserProfile.admin){
        getOrders()
        }
    }

    const getOrders = ()=>{

        adminStuff.orders = []
        odersDB.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {

                adminStuff.orders.push(doc.data())
                setAdminStuff({...adminStuff, orders: [...adminStuff.orders]})
            });
        });
    }

    const getRecipes =  ()=>{
        adminStuff.recipes = []
         recipesDB.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {

                adminStuff.recipes.push(doc.data())
                setAdminStuff({...adminStuff, recipes: [...adminStuff.recipes]})

            });
             console.log("got recipes")

         }).catch(function(error) {
             // The document probably doesn't exist.
             console.error("Error updating document: ", error);
         });
    }

    function updateMenu ({item, meal, available})  {

        console.log(item)
        recipesDB.doc(item.name).update({
            available: item.available
        }).then(function() {
            console.log(item.name, "updated!");
            getRecipes()
        })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }


    return (
        <AuthContext.Provider value={{getDimensions,updateMenu ,setURL,url,getRecipes, currentUser,adminStuff, currentUserProfile, currentUserOrder,userLogin,infoValidated, gotoPage , setUserProfile,setUserOrder}}>
            {children}
        </AuthContext.Provider>
    );

};