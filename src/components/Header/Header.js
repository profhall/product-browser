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
    const {currentUser} = useContext(AuthContext);

    const elements = document.getElementsByClassName("sidenav-overlay")
    const nav_elements = document.getElementsByClassName("sidenav")
    let sidenav_overlay = null
    let sidenav = null



    return (
        <div className="navbar-fixed">
            {windowWidth<990?
        <TheNav className="nav-wrapper  ">
            <a  href="/"  className="">
                    <img style={{height:55}} src={Logo}/>
                </a>



        </TheNav>:null}
        </div>
    );
};

const TheNav = styled.nav`
  width: 100%;
  padding: 0;
  background-color: ${colors.primaryTwo} ;
  color: ${colors.bright} ;
  grid-area: head;
  display: flex;
  flex-direction: column;
`;

const SideNav = styled.ul`
  background-color: ${colors.primaryTwo} ;
  transform: ${props => props.navOpen ? "translateX(0%)":"translateX(-105%)"} ;

`;
const Link = styled(A)`
    color: ${colors.bright} !important; 
    font-size: 20px !important;
    font-weight: bold !important;
`;

export default Navi;
