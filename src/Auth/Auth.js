import  React, {useEffect, useState} from "react"
import app from "../fbase"

export const AuthContext = React.createContext();



export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userProfile, setUserProfile] = useState({})

    useEffect(()=> {
        app.auth().onAuthStateChanged(setCurrentUser)
        console.log("user Set!",currentUser ? currentUser.id:null)

    },[])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );

};