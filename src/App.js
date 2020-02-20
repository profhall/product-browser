import React, {useEffect,useState, useContext} from 'react';
import './App.css';
import Navi from "./components/Header/Header"
import styled from 'styled-components'
import colors from "./Colors"
import Footer from "./components/Footer/Footer";
import Main from "./components/InfoSection/InfoSection";
import Contact from "./components/Contact/Contact";

import emailjs from "emailjs-com";
import OrderForm from "./components/OrderForm/OrderForm";
import {AuthContext, AuthProvider} from "./Auth/Auth";
import Sidebar from "./components/SideBar/SideBar";
import Prices from "./components/Prices/Prices";


function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}

function App() {
    const {getDimensions} = useContext(AuthContext);

    const [windowWidth, setWidth] = useState(getDimensions()["width"]);
    const [windowHeight, setHeight] = useState(getDimensions()["height"]);
    const [url, setURL] = useState(window.location.href);
    const [showMenu, setMenuVisibility] = useState(false);
    const [chosenMeals, setMeals] = useState([]);
    const [chosenSalads, setSalads] = useState([]);
    const [confirmation, setConfirmation] = useState(false);

    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };
    const handleUrlChange =()=>  setURL(window.location.href);
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleUrlChange);


    useEffect(() => {
        setURL(window.location.href)
        setWidth(getDimensions()["width"]);

    }, [chosenSalads,chosenMeals,windowWidth,showMenu,url]);


    return (
    <div>
        <Sidebar/>

            <TheAppGrid url={url} width={ windowWidth} height={windowHeight} showMenu={showMenu}>

                <a href="#" data-target="slide-out" className="sidenav-trigger ">
                    <i className="material-icons medium" style={{color:colors.bright,zIndex:990, position:"fixed", top: 3, right:5, display: windowWidth > 990 ? "none" : ""}}>menu</i>
                </a>

                {!url.includes("admin") ? <Navi windowWidth={windowWidth}/>: null}
                {!url.includes("admin") ? <Footer/>: null}
                {!url.includes("admin") ? <Contact/> :null}
                {!url.includes("admin") ? <Prices/> :null}

                <OrderForm/>

                {!url.includes("admin") ? <Main/>: null}
            </TheAppGrid>
    </div>
    )
}


const TheAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 58px 85% repeat(5, auto);
  grid-template-areas: ${props=>!!!props.url.includes("admin") ? "'head head head head''order order order order''info info info info''info info info info''price price price price''contact contact contact contact''footer footer footer footer' " : "'order' 'order' 'order' 'order' 'footer'"}
  ;
  width:${ props=>props.width > 990 ? "calc(100% - 300px)": "100%"};
  float:${ props=>props.width > 990 ? "right": "none"};
  overflow:${props=>props.url.includes('admin')? "none":"auto"};

  `;

export default App;
