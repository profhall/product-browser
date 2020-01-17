import React, {useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import styled from "styled-components";
import {navigate} from "hookrouter";
import app from "../../fbase";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";

const Sidebar = ()=> {
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {

        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    },[])

        return (
            <NavContainer >
                <ul id="slide-out" className="sidenav" style={{color:colors.bright,backgroundColor:colors.primaryTwo}}>
                    <li   onClick={()=>navigate('/menu')}>
                        <a  style={{color:colors.bright}} href="#!">
                            Weekly Menu
                        </a>
                    </li>
                    {currentUser?<li onClick={()=>navigate('/profile')}><a  style={{color:colors.bright}} href="#!">Profile</a></li>:null}

                    <li><div  style={{backgroundColor:colors.bright}} className="divider" /></li>
                    {/*<li><a href="#!" className="subheader">Logout</a></li>*/}
                    {currentUser?<li  onClick={()=>app.auth().signOut()}><a style={{color:colors.bright}}  href="/">Logout</a></li>:<li onClick={()=>navigate('/signup')}><a  style={{color:colors.bright}} href="#!">Sign Up</a></li>}

                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger ">
                    <i className="material-icons small" style={{color:colors.bright}}>menu</i>
                </a>
            </NavContainer>
        );

}

export default Sidebar;


const NavContainer = styled.div`
    position: fixed;
    z-index: 999;
    right: 0;
    margin: 20px;
`
