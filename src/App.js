import React, {useState} from 'react';
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
const stuff = meals;
function App() {

    const [chosenMeals, setMeals] = useState([]);
    const [howManyMeals, getNumberOfMeals] = useState(0);
    const [mealViewOpen, ToggleMeals] = useState(false);
    const ToggleMealsView = ()=>{
        console.log("See Meals...")
        ToggleMeals(!mealViewOpen)
    };

    const addToFavs=(item)=> {
        // chosenItems.push(<li>{item.name}</li>)

        let items = []
        console.log(chosenMeals.length , howManyMeals)
        if (chosenMeals.length < howManyMeals){
            items = chosenMeals.concat(item.name);
            setMeals(items)
        }
    };
  return (
      <TheApp>
          <Navi/>
          <MainIntro chosenMeals={chosenMeals} getNumberOfMeals={getNumberOfMeals} setMeals={setMeals} ToggleMeals={ToggleMealsView}/>
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
