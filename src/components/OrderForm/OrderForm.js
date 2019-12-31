import React, {useCallback,useState, useContext} from 'react';
import styled from "styled-components";
import {useRoutes, A, useRedirect, navigate} from 'hookrouter';
import Main from "../InfoSection/InfoSection";
import Routes from "../../Routes"
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import {AuthContext, AuthProvider} from "../../Auth/Auth";
import Login from "../Login/Login";
import app from "../../fbase";
import foodPic from './veganBowl.jpeg'



const OrderForm = ({setURL, updateOrder}) => {
    const {currentUser, currentUserProfile, currentUserOrder, setUserProfile,setUserOrder} = useContext(AuthContext)
    const [infoValidated, validateInfo] = useState(false);
    const [userLogin, setLoginInfo] = useState({});
    const routeResult = useRoutes(Routes);



const url =window.location.href
    setURL(url)
    return (
            <TheOrderForm className={""}>
                {
                    !currentUser && !url.includes("signup")
                    ?
                        navigate('login')
                       :
                        routeResult

                }

            </TheOrderForm>
    );
};

export default OrderForm;


const TheOrderForm = styled.div`
    grid-area: order;
    overflow:auto;
    justify-content: center;
    color:white;
    background:linear-gradient(0deg,rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${foodPic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    grid-template-rows: auto ;
    grid-template-areas:
    'content content content content'
    ;
    width: 100%;
    height: 100%;
    position: relative;
`;
