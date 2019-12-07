import React, {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from "./components/Header/Header"
import styled from 'styled-components'
import About from "./components/About/About";
import PnC from "./components/ProductsAndCart/ProductsAndCart";
import IntroHero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import colors from "./Colors"
import Footer from "./components/Footer/Footer";
import MainIntro from "./components/Main/Main";
import MainInfo from "./components/InfoSection/InfoSection";
import Contact from "./components/Contact/Contact";
import {meals} from "./data";
import emailjs from "emailjs-com";
const stuff = meals;
function App() {

    const [chosenMeals, setMeals] = useState([]);
    const [chosenSalads, setSalads] = useState([]);
    const [howManyMeals, getNumberOfMeals] = useState(0);
    const [mealViewOpen, ToggleMeals] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    // const [allMeals, setAllMeals] = useState([]);

    const ToggleMealsView = (toToggle) =>{
        console.log("See Meals...")
        ToggleMeals(toToggle)
    };

    let everything = []

    useEffect(() => {
        console.log(chosenMeals,chosenSalads);

    }, [chosenSalads,chosenMeals]);


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


    const addToFavs=(item)=> {
        // chosenItems.push(<li>{item.name}</li>)

        let items = null;
        let salads = null;
        console.log(chosenMeals.length , howManyMeals);

        if (chosenMeals.length < howManyMeals && item.type !== "salad"){
            console.log("Entree Chosen");

            items = chosenMeals.concat(item.name);
            // console.log(items)
            setMeals(items);


        }
        if(chosenSalads.length < Math.floor(howManyMeals/4) && item.type === "salad"){
            console.log("Salad Chosen");
            salads = chosenSalads.concat(item.name);
            // console.log(items)
            setSalads(salads);

        }
    };
    return (
        <TheApp>
            <Navi/>
            <MainIntro confirmation={confirmation}  emailSelection={emailSelection} chosenMeals={chosenMeals} getNumberOfMeals={getNumberOfMeals} setMeals={setMeals} chosenSalads={chosenSalads} setSalads={setSalads} ToggleMeals={ToggleMealsView}/>
            {mealViewOpen ?
              <Meals>{<Products addToFavs={addToFavs}/>}</Meals> : null}
            <MainInfo/>
            <Contact/>
            <Footer/>
        </TheApp>
    )
};

const TheApp = styled.div`
  height: 100vh;
  position: relative;
  //width: 100%;
  `;

const Meals = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  max-width:100%;
  height: 75% ;
  // background-color: ${colors.primaryTwo } ;
  `;

const TheAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: 
  'hero hero hero hero' 
  'sider main main main' 
  'sider main main main' 
  'sider main main main'
  'sider main main main'
  'sider main main main'
  ;
  width:100vw;
  `;

export default App;
