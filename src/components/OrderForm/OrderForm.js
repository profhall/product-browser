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

    const FormValidation = (e) => {
        console.log("input id", e.target.id);
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (e.target.id === "password"){userLogin["password"] = e.target.value;}
        else if (e.target.id === "email"){userLogin["email"]= e.target.value;}

        setLoginInfo(userLogin);

        if (userLogin["password"] && userLogin["email"]
            && userLogin["password"].length >= 6 &&
            userLogin["email"].match(mailformat))
        {
            console.log(userLogin['password'], userLogin['email'])
            validateInfo(true)
        }
        else { validateInfo(false) }

    };

const url =window.location.href
    setURL(url)
    return (
            <TheOrderForm className={""}>
                {
                    !currentUser && !url.includes("signup") && !url.includes("steps")
                    ?
                        <Login userLogin={userLogin} />
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
    background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${foodPic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    display: flex;
    grid-template-rows: auto ;
    grid-template-areas:
    'content content content content'
    ;
    height: 100%;
    width: 100%;
`;
