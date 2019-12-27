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
    const userOrder= {};
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
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser ?currentUser.uid :null)

const url =window.location.href
    setURL(url)
    return (
            <TheOrderForm className={""}>
                {
                    !currentUser && !url.includes("signup")
                    ?
                        <Login userOrder={userOrder} userLogin={userLogin} infoValidated={infoValidated} FormValidation={FormValidation}/>
                       :
                        routeResult

                }

            </TheOrderForm>
    );
};

export default OrderForm;


const TheOrderForm = styled.div`
    grid-area: order;
    justify-content: center;
    color:white;
    background:linear-gradient(0deg,rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${foodPic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    display: grid;
    grid-template-rows: auto ;
    grid-template-areas:
    'content content content content'
    ;
`;

const TheButtons = styled.div`
  grid-area: buttons;
  color: white;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly ;
  align-items: center ;
  background-color: #8b9898;
`;


const Button = styled.div`
  justify-content: center;
  display: flex;
  border: #ff5be8 solid 1px;
  flex-grow: 1;
`;

