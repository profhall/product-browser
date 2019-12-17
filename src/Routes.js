
import React, {useContext} from 'react';
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import {AuthContext} from "./Auth/Auth";

const Menu = () => <div><h1>Menu</h1> </div>
const Home = () => <div><h1>Welcome</h1><A href={"/mealcount"}>Lets Get Started</A> </div>
const MealCount = () => <div><h3>Pick Number Of Meals</h3> </div>

const routes = {
    "/mealcount": () => <MealCount/>,
    "/menu": () => <Menu />,
    "/": () => <Home />,
    "/signup" : () => <SignUp />
};
export default  routes