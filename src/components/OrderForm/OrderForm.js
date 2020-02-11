import React, {useEffect,useState, useContext} from 'react';
import styled from "styled-components";
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';
import Main from "../InfoSection/InfoSection";
import Routes from "../../Routes"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import {AuthContext, AuthProvider} from "../../Auth/Auth";
import Login from "../Login/Login";
import app from "../../fbase";
import foodPic from './veganBowl.jpeg'



const OrderForm =  () => {
    const {currentUser} =  useContext( AuthContext)
    const routeResult = useRoutes(Routes);

    useEffect(() => {
        // console.log(currentUser)
    }, [currentUser]);




const url =window.location.href
    return (
            <TheOrderForm url={url} className={""}>

                {!!!currentUser && !url.includes("menu")&& !url.includes("signup") && !url.includes("steps")?<Login />:routeResult}

            </TheOrderForm>
    );
};

export default OrderForm;


const TheOrderForm = styled.div`
    grid-area: order;
      overflow:auto;
    justify-content: center;
    color:white;
    background:${props=>props.url.includes('admin')? "" :"linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7)),url("+foodPic+")"};
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    display: flex;
    grid-template-rows: auto ;
    grid-template-areas:
    'content content content content'
    ;
    height:${props=>props.url.includes('admin')? '100vh': ""} ;
    width: 100%;
`;
