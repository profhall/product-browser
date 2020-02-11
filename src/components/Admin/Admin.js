import React from 'react';
import styled from "styled-components";
import Sidebar from "../SideBar/SideBar";

const Admin = () => {
    return (
        <Dashboard>
            The Dashboard
        </Dashboard>
    );
};

export default Admin;

const Dashboard = styled.div`
width: 100%;
overflow-y: auto;
border: red 1px solid;
color: #4a90e2;
grid-area: content;
`
