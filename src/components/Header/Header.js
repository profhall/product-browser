import React, {useEffect,useContext, useState} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";
import {navigate, A} from "hookrouter";
import Sidebar from "../SideBar/SideBar";
import Logo from "../media/logo-01.png";



const Navi = ({windowWidth}) => {
    const [navOpen, setSideNav] = useState(false);
    const url =window.location.href
    const {currentUser,chosenMeals,chosenSalads} = useContext(AuthContext);

    const elements = document.getElementsByClassName("sidenav-overlay")
    const nav_elements = document.getElementsByClassName("sidenav")
    let sidenav_overlay = null
    let sidenav = null

    const seeMeals = ()=>{
        console.log(chosenMeals ? chosenMeals : "no meals")
    }
    const seeSalads = ()=>{
        console.log(chosenSalads ? chosenSalads : "no salads")
    }

    return (
        <div className="navbar-fixed">
            {windowWidth<990?
        <TheNav className="nav-wrapper  ">
            <a  href="/"  className="">
                    <img style={{height:55}} src={Logo}/>
                </a>
            <MealTracker>
            <h5 style={{marginTop:2, marginBottom:6}} onClick={()=>seeMeals()}>Meals: {chosenMeals? chosenMeals.length : 0} </h5>
            <h5 style={{margin:0, padding:0}} onClick={()=>seeSalads()}>Salads: {chosenSalads? chosenSalads.length : 0}</h5>
            </MealTracker>

        </TheNav>:null}
        </div>
    );
};

const TheNav = styled.nav`
  width: 100%;
  padding: 0;
  background-color:white;
  color: ${colors.bright} ;
  grid-area: head;
  display: flex;
  flex-direction: row;
`;

const MealTracker = styled.div`
align-self: center;
margin-left: 25px;
`;

const Link = styled(A)`
    color: ${colors.bright} !important; 
    font-size: 20px !important;
    font-weight: bold !important;
`;

const I = styled.i`
//align-self: flex-end;
//right: 0;
`;

export default Navi;
