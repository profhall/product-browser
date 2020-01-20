import React, {useEffect,useContext, useState} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";
import {navigate, A} from "hookrouter";
import Sidebar from "../SideBar/SideBar";



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

        <TheNav className="nav-wrapper  ">
                <a id="logo-container" href="/" className="">

                    <h3 className="flow-text left" style={{color:colors.bright}}>The Tasty Plant-Based Kitchen</h3>
                </a>



        </TheNav>
            <Sidebar/>
        </div>
    );
};

const TheNav = styled.nav`
  width: 100%;
  padding: 0 15px 0 15px;
  background-color: ${colors.primaryTwo} ;
  color: ${colors.bright} ;
  grid-area: head;
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
