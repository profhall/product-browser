import React, {useContext, useEffect,useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import styled from "styled-components";
import {navigate} from "hookrouter";
import app from "../../fbase";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";
import menuPhoto from '../media/foodIcons/menu.png'
import basketPhoto from "../media/foodIcons/vegetarian.png";

const Sidebar = ()=> {
    const {currentUser,currentUserProfile} = useContext(AuthContext);
    const [navOpen,setNav] = useState(false);

    useEffect(() => {

        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
        console.log(elem.style)
    },[])

    const toggleSider= () => {
        setNav(!navOpen)
    }

        return (
            <NavContainer >
                <ul id="slide-out" className="sidenav" style={{color:colors.bright,backgroundColor:colors.primaryTwo}}>
                    <li>
                        <div className="user-view">
                            <div className="background">
                            </div>
                            <a href="#user"><img className="circle" src={"../media/foodIcons/menu.png"}/></a>
                            {currentUserProfile?<a href="#name"><span className="white-text name">{currentUserProfile.name}</span></a>:null}
                            {currentUserProfile?<a href="#email"><span className="white-text email">{currentUserProfile.email}</span></a>:null}
                        </div>
                    </li>
                    <li   className="sidenav-close " onClick={()=>navigate('/menu')}>
                        <a  style={{color:colors.bright}} href="#!">
                            {/*<Icon className="responsive-img" src={menuPhoto}/>*/}
                            Weekly Menu
                        </a>
                    </li>
                    {currentUserProfile?<li className="sidenav-close"  onClick={()=>navigate('/profile')}><a  style={{color:colors.bright}} href="#!">Account</a></li>:null}

                    <li><div  style={{backgroundColor:colors.bright}} className="divider" /></li>
                    {currentUserProfile?<li className="sidenav-close " onClick={()=>app.auth().signOut()}><a style={{color:colors.bright}}  href="/">Logout</a></li>:<li className="sidenav-close " onClick={()=>navigate('/signup')}><a  style={{color:colors.bright}} href="#!">Sign Up</a></li>}

                </ul>
                <a href="#" data-target="slide-out" onClick={toggleSider} className="sidenav-trigger ">
                    <i className="material-icons small" style={{color:colors.bright,zIndex:990}}>menu</i>
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
const Icon = styled.img`
width: 25px;
margin: 0 0 0 0;
`;