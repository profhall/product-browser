import React, {useEffect,useContext, useState} from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';
import colors from "../../Colors";
import Routes from "../../Routes"
import {AuthContext} from "../../Auth/Auth";
import app from "../../fbase";
import {navigate, A} from "hookrouter";



const Navi = ({windowWidth}) => {
    const [navOpen, setSideNav] = useState(false);
    const url =window.location.href
    const {currentUser} = useContext(AuthContext);

    const elements = document.getElementsByClassName("sidenav-overlay")
    const nav_elements = document.getElementsByClassName("sidenav")
    let sidenav_overlay = null
    let sidenav = null


    useEffect(() => {
        console.log("mounted: ", sidenav_overlay)
        sidenav_overlay = elements[0];
        sidenav = nav_elements[0];


        if (navOpen && sidenav_overlay ){
            sidenav_overlay.style.opacity = "1"
            sidenav_overlay.addEventListener("click", ()=>setSideNav(!navOpen));

        }
        else if (!navOpen && sidenav_overlay ){
            sidenav_overlay.style.opacity = "0"
            sidenav_overlay.addEventListener("click", ()=>setSideNav(!navOpen));

        }



    }, [navOpen,windowWidth]);

    const navButtonHandler = ()=>{

        if (navOpen && sidenav)  {
            sidenav.style.transform="translateX(-105%)"
            setSideNav(false)
        }else if (sidenav) {
            sidenav.style.transform="translateX(0%)";
            setSideNav(true)
        }

    }



    return (
        <div className="navbar-fixed">

        <TheNav className="nav-wrapper  ">
                <a id="logo-container" href="/" className="">
                    <h5 className="flow-text left" style={{color:colors.bright}}>The Tasty PBK</h5>
                </a>

            <a href="#" data-target="mobile-demo" onClick={navButtonHandler} className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                    {currentUser?<li onClick={()=>navigate('/menu')}><Link href="#">Menu</Link></li>:null}

                {currentUser?<li onClick={()=>navigate('/profile')}><Link href="#">Profile</Link></li>:null}

                    {currentUser?<li onClick={()=>app.auth().signOut()}><Link href="/">Logout</Link></li>:<li><Link href="/">Login</Link></li>}

                </ul>


        </TheNav>
            <SideNav navOpen={navOpen} className="sidenav" id="mobile-demo">
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
  transform: ${props => props.navOpen ? "translateX(0%)":"translateX(-105%)"} ;

`;
const Link = styled(A)`
    color: ${colors.bright} !important; 
    font-size: 20px !important;
    font-weight: bold !important;
`;

export default Navi;
