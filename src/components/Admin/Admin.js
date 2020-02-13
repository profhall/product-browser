import React, {useContext,useState, useEffect} from 'react';
import styled from "styled-components";
import Sidebar from "../SideBar/SideBar";
import {AuthContext} from "../../Auth/Auth";
import {useRoutes} from "hookrouter";
import Routes from "../../Routes";
import Orders from "../Orders/Orders";
import colors from "../../Colors";

const Admin = () => {
    const {currentUser,currentUserProfile, adminStuff} =  useContext( AuthContext)
    const routeResult = useRoutes(Routes);

    useEffect(() => {
        // console.log(currentUser)
        console.log(adminStuff)
        if(!!currentUser || !!currentUserProfile.admin){
            // gotoPage('/')
        }
    }, [currentUser,currentUserProfile,adminStuff]);

    return (
        <Dashboard>
            <Orders orders={adminStuff ? adminStuff.orders : null}/>
        </Dashboard>
    );
};

export default Admin;

const Dashboard = styled.div`
width: 100%;
overflow-y: auto;
border-left: ${colors.bright} 3px solid;
color: #4a90e2;
grid-area: content;
`
