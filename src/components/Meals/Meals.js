import React, {useState,useContext, useEffect} from 'react';
import styled from "styled-components";
import {meals, salads, mains, sides} from '../../data'
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";
import Modal from 'react-modal';


const stuff = meals

function getWidth() {
    return window.innerWidth
}

const MealsSelector = () => {
    const [windowWidth, setWidth] = useState(getWidth);
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    const {currentUserOrder,setUserOrder, gotoPage} = useContext(AuthContext);

    let {meal_count} = currentUserOrder ? currentUserOrder : 0 ;
    let salad_count = Math.floor(meal_count/4)

    const [allMealsPicked,validateMeals] = useState(false);
    const [mainsPicked,addMain]= useState(0);
    const [modalOpen,setModal]= useState(false);
    const [mainsList,addMainToList] = useState([]);
    const [saladsPicked,addSalad] = useState(0);

    useEffect(()=>{
        console.log(mainsList, meal_count)
        salad_count =  Math.floor(meal_count/4)
        mainsPicked+saladsPicked === meal_count+salad_count ? validateMeals(true) : validateMeals(false)


    },[windowWidth,mainsList])




    const addDish = (item)=>
    {
        let mains = null;
        switch(item.type) {
            case "main":

                if (mainsPicked < meal_count) {
                    console.log(mainsList)
                    mains = mainsList.concat(item.name);
                    addMain(mainsPicked + 1);
                    addMainToList(mains)
                    // addToOrder(mains)

                }
                break;
            case "side":

                console.log("Side Dish To Be Added ")
                break;
            case "salad":

                console.log("Salad Dish To Be Added ")
                if (saladsPicked < salad_count) {
                    addSalad(saladsPicked+1);
                    mains = mainsList.concat(item.name);
                    addMainToList(mains)
                }
                break;
            default:
                console.log("no type bitch")
        }

    }
    
    const mealList = stuff.map((item) => {
            return  (
        <Main className={"col s12 m5"} >
            <PhotoGrid full={!!item.side}>
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
            <ButtonContainer className={"row center"}>
                <Button onClick={()=>addDish(item )} width={windowWidth}  className={"btn-large col s12 m6"}>Add</Button>
            </ButtonContainer>
        </Main>
            )


        });

    const deleteMeal= (fav, index) =>{
        console.log("delete meal", fav.toLowerCase(), index)
        mainsList.splice(index,1)
        addMainToList(mainsList)

        fav.toLowerCase().includes("salad") ?addSalad(saladsPicked-1)  : addMain(mainsPicked-1);


    };

    const nextPage = () =>{
        gotoPage("/confirm")
        setUserOrder({...currentUserOrder, "meals": mainsList})
    };

    const handleOpenModal = () =>{
        setModal(true)
    };
    const handleCloseModal = () =>{
        setModal(false)
    };




    return (
        <MealsSelectorContainer >
            <MainHeader main={mainsList.length > 0} className={"center"} width={windowWidth}>
                <MainHeaderText>
                    <h4 style={{margin:0}}> {mainsPicked >0 ? `Pick remaining ${meal_count-mainsPicked}`: `Pick Your ${meal_count} Meals.`}</h4>
                    <h5>With every 4 meals you get a 16oz salad. You have {salad_count - saladsPicked} salads to pick</h5>

                    {mainsList.length > 0 && windowWidth > 650 ? <h5><b>Tap food Item To Delete</b></h5>:
                        mainsList.length > 0 ? <h5 onClick={handleOpenModal}>click to see your selection</h5>: null }
                </MainHeaderText>
                {mainsList.length > 0  && windowWidth > 650 ? <MainHeaderList className={"row "}>
                    {
                        mainsList.length > 0?
                            <ChosenMealsList  className={`col s12 center`}>
                                {<ol>
                                    {mainsList.map((fav,i)=>
                                        <li id={i}   onClick={()=>deleteMeal(fav,i)}><h5>{fav}</h5></li>
                                    )} </ol>
                                }
                            </ChosenMealsList>: null
                    }
                </MainHeaderList> :
                    null
                }


                <Modal
                    isOpen={modalOpen}
                    contentLabel="onRequestClose Example"
                    onRequestClose={handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <h5><b>Your Selections</b></h5>
                    <h5><b>Tap food Item To Delete</b></h5>

                    <Button className="btn-large" onClick={handleCloseModal}>Close</Button>
                </Modal>
            </MainHeader>

            <Mains className={"row center"}>
                {mealList}
            </Mains>

            <ButtonContainer className={"row "}>
                <Button className={"btn-large col m4"} onClick={()=>gotoPage("/deliverydate")}>Go Back</Button>
                <Button className={`btn-large col  m5 ${allMealsPicked?"":"disabled"}`} onClick={nextPage}>Confirm Order</Button>
            </ButtonContainer>
        </MealsSelectorContainer>
    );
};

export default MealsSelector;


const MealsSelectorContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-area: content;
  grid-template-rows: 20% 70% 10%;
  grid-gap: 10px 0;
  grid-template-areas: 
  "mainhead"
  "mains"
  "button"
  ;
  padding-bottom: 15px;
  margin: auto;
`;
const Mains = styled.div`
  height: 100%;
  width: 100%;
  grid-area: mains;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
   
`;

const MainHeader = styled.div`
  display: grid;
  grid-area: mainhead;
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
  justify-content: flex-start;
  flex-direction: column;
`;

const MainHeaderList = styled.div`
    display: flex;
    grid-area: list;
      flex-direction: column;

  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;


const ChosenMealsList = styled.div`
  text-align: left;
  padding: 0 30px !important;
  width: 95%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255,255,255, .2);
`;





/*
Buttons Styling
 */

const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`

const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;

`;

/*
* 
    Meal Card Styling 
* 
*/

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

const Main = styled.div`
  border-radius: 5px;
  display: grid;
  min-height: 300px !important;
  height: 300px ;
  margin: auto !important;
  margin-bottom: 12px !important;
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
