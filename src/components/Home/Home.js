import React, {useContext} from 'react';
import {A, navigate} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";

const Home = ({}) => {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser?currentUser.uid:"No user");
    const userId = currentUser.uid
    // console.log("The User: "+currentUser.uid)

    const selectMealCount = ()=>{
        console.log(userId)
        navigate('\mealcount', false, {user:userId}, false)
    }
    return (
        <div>
            <h1>Welcome {userId}</h1>
            <button onClick={selectMealCount}>Lets Get Started</button>
        </div>
    );
};

export default Home;
