
import React, {useContext} from 'react';
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {AuthContext} from "./Auth/Auth";
import MealCount from "./components/MealCount/MealCount";
import DeliveryDate from "./components/Calendar/Calendar";
import MealsSelector from "./components/Meals/Meals";
import Confirmation from "./components/Confirmation/Confirmation";

const Menu = () => <div><h1>Menu</h1> </div>
const Home = () => <div><h1>Welcome</h1><A href={"/mealcount"}>Lets Get Started</A> </div>



const routes = {
    "/mealcount": () => <MealCount/>,
    "/confirm": () => <Confirmation/>,
    "/mealselection": () => <MealsSelector/>,
    "/deliverydate": () => <DeliveryDate/>,
    "/menu": () => <Menu />,
    "/": () => <Home />,
    "/signup" : () => <SignUp/>
};
export default  routes