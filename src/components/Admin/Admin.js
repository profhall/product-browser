import React, {useEffect, useState} from 'react';
import SideNav from "../SideNav/SideNav";
import Navi from "../Header/Header";
import styled from "styled-components";

const header_height= "72px";
const footer_height= "70px";
const nav_width= "250px";


function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}
const Admin = () => {

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };

    useEffect(()=>{

        }
    ,[windowWidth])
    window.addEventListener('resize', handleResize);
    return (
        <AdminConsole windowWidth={windowWidth}>
            <AdminContentContainer>
                <BigCard>
                    <h3>Orders</h3>
                </BigCard>
                <BigCard>
                    <h3>Users</h3>
                </BigCard>
                <BigCard>
                    <h3>Recipes</h3>
                </BigCard>
                <BigCard>
                    <h3>Ingredients</h3>
                </BigCard>
            </AdminContentContainer>
            <SideNav/>
        </AdminConsole>
    );
};

export default Admin;


const AdminConsole = styled.div`
display: flex;
overflow: auto;
  grid-area: content;
  height: 100%;
  width: 100%;
  padding: ${props=> props.windowWidth < 990? 0 :"10px 15px 0 315px"};

`
const AdminContentContainer = styled.div`
display: flex;
flex-wrap: wrap;
overflow: scroll;
align-items: center;
justify-content: space-evenly;
  height: 100%;
  width: 100%;

`
const BigCard = styled.div`
overflow: auto;
  background-color: whitesmoke;
  color: black;
  height: 35%;
  width: 100%;
  padding: 0 15px;
  margin: 15px 0;
    box-shadow: 0 5px 18px 0 rgba(215,185,86,.6);
    transition: 0.3s;

`

