import React, {useEffect,useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from "./components/Header/Header"
import styled from 'styled-components'
import colors from "./Colors"
import Footer from "./components/Footer/Footer";
import Main from "./components/InfoSection/InfoSection";
import Contact from "./components/Contact/Contact";
import {meals} from "./data";
import emailjs from "emailjs-com";
import OrderForm from "./components/OrderForm/OrderForm";
import {AuthContext, AuthProvider} from "./Auth/Auth";
import Sidebar from "./components/SideBar/SideBar";
import Prices from "./components/Prices/Prices";


function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}

const stuff = meals;
function App() {
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
    // const [allMeals, setAllMeals] = useState([]);


    useEffect(() => {
        console.log(chosenMeals,chosenSalads, url);
        setURL(window.location.href)
        setWidth(getDimensions()["width"]);

    }, [chosenSalads,chosenMeals,windowWidth,showMenu,url]);

    const emailSelection = (chosenItems, chosenSalads,userInfo) => {
        const Info = userInfo;
        const theSubmitInfo =
            {

                "chosen_items":chosenItems.concat(chosenSalads),
                "name":Info["name"],
                "email":Info["email"],
                "state":Info["state"],
                "city":Info["city"],
                "zip":Info["zip"],
                "street": Info["street"]

            };
        Info['message'] ? theSubmitInfo['message'] = Info['message'] : Info['message'] = null;
        console.log(`favs submitted`);
        console.log(theSubmitInfo);
        // setConfirmation(!confirmation)

        var service_id = "default_service";
        var template_id = "template_awzr3ptv";
        emailjs.send('meal_prep', 'template_awzr3ptv', theSubmitInfo, "user_p8ucvKr8lnqx5SwxOEshJ")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setConfirmation(true)

            }, function(error) {
                console.log('FAILED...', error);
                setConfirmation(false)
            });

    };


    return (
<AuthProvider>
    <Sidebar/>

        <TheAppGrid url={url} width={ windowWidth} height={windowHeight} showMenu={showMenu}>

            <a href="#" data-target="slide-out" className="sidenav-trigger ">
                <i className="material-icons medium" style={{color:colors.bright,zIndex:990, position:"fixed", top: 3, right:5, display: windowWidth > 990 ? "none" : ""}}>menu</i>
            </a>
            <Navi windowWidth={windowWidth}/>
            {!url.includes("admin") ? <Footer/>: null}
            {!url.includes("admin") ? <Contact/> :null}
            {!url.includes("admin") ? <Prices/> :null}

            <OrderForm/>

            {!url.includes("admin") ? <Main/>: null}
        </TheAppGrid>
</AuthProvider>
    )
};


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
