
import React, {useContext} from 'react';
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {AuthContext} from "./Auth/Auth";
import Menu from "./components/Menu/Menu";
import MealCount from "./components/MealCount/MealCount";
import DeliveryDate from "./components/Calendar/Calendar";
import MealsSelector from "./components/Meals/Meals";
import Confirmation from "./components/Confirmation/Confirmation";
import OrderSubmitted from "./components/OrderSubmitted/OrderSubmitted";
import UserProfile from "./components/UserProfile/UserProfile";
import Home from "./components/Home/Home";
import Steps from "./components/StepsCarousel/StepsCarousel";





const routes = {
    "/menu*": () => <Menu />,
    "/mealcount*": () => <MealCount />,
    "/confirm*": () => <Confirmation/>,
    "/mealselection*": () => <MealsSelector/>,
    "/deliverydate*": () => <DeliveryDate/>,
    "/order_submitted*": () => <OrderSubmitted />,
    "/profile*": () => <UserProfile />,
    "/steps*": () => <Steps/>,
    "/": () => <Home  />,
    "/signup" : () => <SignUp/>,
    "/login" : () => <Login/>
};
export default  routes