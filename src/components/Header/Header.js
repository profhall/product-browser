import React, {useContext} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";
import {navigate, A} from "hookrouter";



const Navi = ({toggleMenu}) => {
    const url =window.location.href
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="navbar-fixed">

        <TheNav className="nav-wrapper  ">
                <a id="logo-container" href="/" className="">
                    <h5 className="flow-text left" style={{color:colors.bright}}>The Tasty PBK</h5>
                </a>

            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                    {currentUser?<li onClick={()=>navigate('/menu')}><Link href="#">Menu</Link></li>:null}

                {currentUser?<li onClick={()=>navigate('/profile')}><Link href="#">Profile</Link></li>:null}

                    {currentUser?<li onClick={()=>app.auth().signOut()}><Link href="/">Logout</Link></li>:<li><Link href="/">Login</Link></li>}

                </ul>


        </TheNav>
            <SideNav className="sidenav" id="mobile-demo">
                {currentUser?
                    <li onClick={()=>navigate('/menu')}><Link href="/">Menu</Link></li>:null}


                {currentUser?
                    <li onClick={()=>navigate('/profile')}><Link href="/">Profile</Link></li>:null}
                {currentUser?
                    <li onClick={()=>app.auth().signOut()}><Link href="/">Logout</Link></li>:<li><A href="/">Login</A></li>}
            </SideNav>
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
  li > &{
  background-color: ${colors.primaryTwo} ;

  }
`;
const Link = styled(A)`
    color: ${colors.bright} !important; 
    font-size: 20px !important;
    font-weight: bold !important;
`;

export default Navi;
