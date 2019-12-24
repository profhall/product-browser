import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Products from "../Products/Products";
import {meals, salads, mains, sides} from '../../data'
import Product from "../Product/Product";
import colors from "../../Colors";
import {navigate, useQueryParams} from "hookrouter";

const stuff = meals

function getWidth() {
    return window.innerWidth
}
const MealsSelector = () => {
    const [queryParams] = useQueryParams()
    const [mealCart, setMeals] = useState({});
    const [windowWidth, setWidth] = useState(getWidth);
    const [allMainsPicked,validateMains] = useState(false);
    const [allSaladsPicked,validateSalads] = useState(false);
    const [mainsPicked,addMain]= useState(0);
    const [mainsList,addMainToList] = useState([]);
    const [saladsPicked,addSalad] = useState(0);
    let {meal_count} = queryParams
    let salad_count = Math.floor(meal_count/4)


    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(mainsList)
        setWidth(getWidth());
        console.log("Main :", mainsPicked, " Salads : ", saladsPicked)
        mainsPicked === meal_count ? validateMains(true) : validateMains(false)
        salad_count =  Math.floor(meal_count/4)
    },[windowWidth,mainsList,allMainsPicked, mainsPicked,saladsPicked])

    const addDish = (item)=>
    {
        let mains = null;
        switch(item.type) {
            case "main":
                mains = mainsList.concat(item.name);
                if (mainsList.length < meal_count) {
                    addMain(mainsPicked + 1)
                    addMainToList(mains)
                }



                break;
            case "side":
                console.log("Side Dish To Be Added ")
                break;
            case "salad":
                console.log("Salad Dish To Be Added ")

                if (saladsPicked < salad_count) {
                    addSalad(saladsPicked+1)
                    mains = mainsList.concat(item.name);
                    addMainToList(mains)
                }
                break;
            default:
                console.log("no type bitch")
        }
    }
    const mainList = stuff.map((item) => {
            return  <Main className={"col s12 m5"} >
                <PhotoGrid full={item.side?true:false}>
                <MainPhoto photo={item.photo} />
                    {item.side?
                        <SidePhoto photo={item.side ? item.side[1].pic : null} num={1}/>
                    :null}
                    {item.side && item.type!=="salad"?
                        < SidePhoto  photo={item.side ? item.side[2].pic:null} num={2}/>
                    :null}
                </PhotoGrid>
                <Desc>
                    <I className="material-icons">info</I>
                    <h5>{item.name}</h5>
                    <TheDescr>{item.description}</TheDescr>
                </Desc>
                <ButtonContatiner className={"row center"}>

                <Button onClick={()=>addDish(item )} width={windowWidth}  className={"btn-large col s12 m6"}>Add</Button>
                </ButtonContatiner>
            </Main>


        })
    const deleteMeal= (fav) =>{console.log("delete meal")}
    return (
        <MealsSelectorContainer >
            <MainHeader main={mainsList.length > 0} className={"center"} width={windowWidth}>
                <MainHeaderText>
                    <h4> {mainsPicked >0 ? `You have ${meal_count-mainsPicked} left to pick`: `Please Pick Your ${meal_count} Meals.`}</h4>
                    <h6>Every 4 meals come with a 16oz salad. You have {salad_count - saladsPicked} salads to pick</h6>
                </MainHeaderText>
                {mainsList.length > 0  && windowWidth > 650 ? <MainHeaderList>
                    {
                        mainsList.length > 0?
                            <ChosenMealsList  className={`col  center`}>
                                <h5>Tap Item To Delete</h5>
                                {<ol>
                                    {mainsList.map((fav)=>
                                        <li  onClick={()=>deleteMeal(fav)}><h6>{fav}</h6></li>
                                    )} </ol>
                                }
                            </ChosenMealsList>: null
                    }
                </MainHeaderList> : null}
            </MainHeader>
            {/*<Mains className={"row "}>*/}
            {/*    {!allMainsPicked ? mainList: null}*/}
            {/*    {allMainsPicked && !allSidesPicked ? sideList: null}*/}
            {/*    {allMainsPicked && allSidesPicked && !allSaladsPicked  ? saladList: null}*/}
            {/*</Mains>*/}

            <Mains className={"row "}>
                {mainList}
            </Mains>

            <ButtonContatiner className={"row center"}>
                <Button className={"btn-large col s12 m6"} onClick={()=>{navigate("/confirm")}}>Confirm Order</Button>
            </ButtonContatiner>
        </MealsSelectorContainer>
    );
};

export default MealsSelector;


const TheDescr = styled.p`
align-self: center;
height: 75%;
overflow: scroll;
`;


const I = styled.i`
align-self: flex-end;
right: 0;
margin-bottom: -25px;
`;


const MealsSelectorContainer = styled.div`
  display: grid;
  height: 95%;
  width: 100%;
  max-width:95vw;
  grid-area: content;
  grid-template-rows: 20% 70% 10%;
  grid-gap: 10px 0;
  grid-template-areas: 
  "mainhead"
  "mains"
  "button"
  ;
`;

const Main = styled.div`
  border-radius: 15px;
  display: grid;
  min-height: 300px !important;
  height: 300px ;
  margin: 0 0 7px 0 !important;
  grid-template-columns: 45% 55%;
  grid-template-rows: 75% 20%;
  grid-gap: 2px;
  grid-template-areas: 
  "photo desc"
  "button button"
  ;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
  background-color: white;
  `;

const Button = styled.button`
  margin: auto !important;
  width:${props=> props.width > 650  ? "60%":"100%"};
  background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`;
const ButtonContatiner = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

`;
const Desc = styled.div`
  grid-area: desc;
  height: 95%;
  color: ${colors.secondaryTwo};
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const SidePhoto = styled.div`
  grid-area: ${props=>props.num ===1 ? "side1":"side2"};
  height: 100%;
  margin: auto;
  width: 100%;
  background:url(${props=> props.photo ? props.photo:"https://cdn.pixabay.com/photo/2018/02/13/09/06/sea-3150196_1280.jpg"});
  background-repeat: no-repeat ;
  background-size:  cover ;
  background-position: center;
`;
const MainPhoto = styled.div`
  grid-area: main;
  
  height: 100%;
  margin: auto;
  width: 100%;
  background:url(${props=> props.photo ? props.photo:"https://cdn.pixabay.com/photo/2018/02/13/09/06/sea-3150196_1280.jpg"});
  background-repeat: no-repeat ;
  background-size:  cover ;
  background-position: center;
`;

const PhotoGrid = styled.div`
  grid-area: photo;
  height: 95%;
  grid-template-rows: 70% 30%;
  border-radius: 5px;
  margin: auto;
  width: 100%;
  grid-gap: 2px;
  display: grid;
  grid-template-areas:${ props=>props.full ?
  '"main main" "side1 side2"'
  :
    '"main main" "main main"'
  };
  
`;

const Mains = styled.div`
  height: 95%;
  max-height: 50vh;
  width: 98%;
  grid-area: mains;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
   
`;

const MainHeader = styled.div`
  display: grid;
  height: 95%;
  width: 100%;
  margin: auto;
  grid-template-columns: 50% 50%;
  grid-template-areas: ${props=> props.width > 650 && props.main ? "'text list'" : "'text text'"};
  
`;

const MainHeaderText = styled.div`
  display: flex;
  height: 95%;
  width: 100%;
  grid-area: text;
  justify-content: center;
  flex-direction: column;
`;

const MainHeaderList = styled.div`
    display: flex;
    grid-area: list;
      flex-direction: column;

  height: 95%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;


const ChosenMealsList = styled.div`
  text-align: left;
  padding: 0 30px !important;
  width: 95%;
  height: 95%;
  max-height: 350px;
  overflow: auto;
  background-color: rgba(255,255,255, .2);
`;