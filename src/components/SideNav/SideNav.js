import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import styled from "styled-components";
import colors from "../../Colors";




const SideNav = () => {
    useEffect(()=>
    {
        console.log("mounted")
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }, [])

    return (
        <div style={{zIndex:999}}>
            <Sider id="slide-out" className="sidenav sidenav-fixed">

                <li>
                    <Link href="#">
                        <i className="material-icons">cloud</i>First Link
                        With Icon
                    </Link>
                </li>
                <li>
                    <Link href="#">Second Link</Link>
                </li>
                <li>
                    <Link className="subheader">Subheader</Link>
                </li>
                <li>
                    <Link className="waves-effect" href="#">
                        Third Link With Waves
                    </Link>
                </li>
            </Sider>
        </div>
    );
};

export default SideNav;


const Sider = styled.ul`
  top:65px !important;
  background-color: ${colors.primaryTwo} !important; ;
  color: ${colors.bright} !important;
`

const Link = styled.a`
  color: ${colors.bright} !important;
`