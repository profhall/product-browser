import React, {useContext} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {A} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";


const Navi = ({toggleMenu}) => {
    const url =window.location.href
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="navbar-fixed">

        <TheNav >
            <div className="nav-wrapper container ">
                <a id="logo-container" href="/" className="brand-logo ">
                    <h5 className="flow-text" style={{color:colors.bright}}>PJ's Plant-Based Kitchen</h5>
                </a>
                <ul className="right">
                    {currentUser?<li onClick={()=>app.auth().signOut()}><A href="/">Logout</A></li>:<li><A href="/">Login</A></li>}
                </ul>


            </div>
        </TheNav>
        </div>
    );
};

const TheNav = styled.nav`
  width: 100%;
  background-color: ${colors.primaryTwo} ;
  color: ${colors.bright} ;
  grid-area: head;
`;

const HeaderIcon = styled.img`
  width: 7%;
  align-self: center;
`;
const HeaderTitle = styled.h4`
  //height: 75%;
  align-self: center;
  margin: auto;
  font-size: 2em;
  
`;

export default Navi;
