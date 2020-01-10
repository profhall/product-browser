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

    const handleResize =()=> {
        setWidth(getDimensions()["width"]);
        setHeight(getDimensions()["height"]);
    };
    const handleUrlChange =()=>  setURL(window.location.href);
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleUrlChange);

    return (
<AuthProvider>

        <TheAppGrid url={url} width={ windowWidth} height={windowHeight} showMenu={showMenu}>
            <Navi windowWidth={windowWidth}/>

            <OrderForm  setURL={handleUrlChange}/>
            {!url.includes("admin") ?<Contact/>:null}
                {!url.includes("admin") ?<Main/>:null}
                {!url.includes("admin") ?<Footer/>:null}

        </TheAppGrid>
</AuthProvider>
    )
};


const TheAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: ${ props=>  `65px ${props.width > 650 && props.height > 500 && !props.url.includes("mealselection") && !props.url.includes("profile")
    ? 
    props.url.includes("admin")
        ? "1fr" 
        :"75%" 
    :"95% repeat(4, auto)"} `};
  
  grid-template-areas: ${props => !props.url.includes("admin") ?
    "'head head head head''order order order order''info info info info''info info info info''contact contact contact contact''footer footer footer footer'"
    :
    "'head head head head''order order order order' "
    }
  ;
  width:100vw;
  `;

export default App;
