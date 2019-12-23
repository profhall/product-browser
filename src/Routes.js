
import React, {useContext} from 'react';
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {AuthContext} from "./Auth/Auth";
import MealCount from "./components/MealCount/MealCount";
import DeliveryDate from "./components/Calendar/Calendar";
import MealsSelector from "./components/Meals/Meals";
import Confirmation from "./components/Confirmation/Confirmation";
import OrderSubmitted from "./components/OrderSubmitted/OrderSubmitted";
import Home from "./components/Home/Home";





const routes = {
    "/mealcount*": () => <MealCount />,
    "/confirm*": () => <Confirmation/>,
    "/mealselection*": () => <MealsSelector/>,
    "/deliverydate*": () => <DeliveryDate/>,
    "/order_submitted*": () => <OrderSubmitted />,
    "/": () => <Home  />,
    "/signup" : () => <SignUp/>
};
export default  routes