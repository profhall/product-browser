import React from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";


const Navi = () => {
    return (
        <div className="navbar-fixed">

        <TheNav >
            <div className="nav-wrapper container ">
                <a id="logo-container" href="/" className="brand-logo ">
                    <h5 className="flow-text" style={{color:colors.bright}}>PJ's Plant-Based Kitchen</h5>
                </a>
                <ul className="right">
                    <li><a href="#">Meals</a></li>
                </ul>


            </div>
        </TheNav>
        </div>
    );
};

const TheNav = styled.nav`
  //width: 100%;
  background-color: ${colors.primaryTwo} ;
  color: ${colors.bright} ;
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
