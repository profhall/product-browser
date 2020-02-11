import React, {useState,useContext, useEffect} from 'react';
import styled from "styled-components";
import {meals, salads, mains, sides} from '../../data'
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";
import {Modal, Button as But} from 'react-materialize';
import {Button, ButtonContainer} from "../Styles";
import foodPic from "../OrderForm/veganBowl.jpeg";

const thisWeeksMeals = meals.filter((item)=>item.available)

function getWidth() {
    return window.innerWidth
}

const MealsSelector = () => {
    const [windowWidth, setWidth] = useState(getWidth);
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);
    const {currentUserOrder,setUserOrder, gotoPage} = useContext(AuthContext);

    let {meal_count, meals} = currentUserOrder ? currentUserOrder : 0 ;
    let salad_count =  Math.floor(meal_count/4);

    const [allMealsPicked,validateMeals] = useState(false);
    const [selected,setSelected] = useState("all");
    const [mainsPicked,addMain]= useState(meals.length > 0 ?meals.length-salad_count:0);
    const [mainsList,addMainToList] = useState([]);
    const [saladsPicked,addSalad] = useState(meals ? meals.filter((meal)=>meal.includes("Salad")).length : 0);


    console.log(meals.filter((meal)=>meal.includes("Salad")))

    useEffect(()=>{
        console.log(mainsList, meal_count)
        mainsPicked+saladsPicked === meal_count+salad_count ? validateMeals(true) : validateMeals(false)


    },[mainsList])


    useEffect(()=>{

        addMainToList(meals?meals:mainsList )

    },[])
    const mealList = thisWeeksMeals.filter(item=> selected !== "all" ? item.type === selected : item.type !== "all" ).map((item) =>
        <div className="col s12 m4 ">
            <div className="card medium" >
                <div style={{height:"60%"}} className="card-image  waves-effect waves-block " >
                    <CardImage pic={item.photo}  className="activator center" >
                        <i className="material-icons right" style={{color:"white"}}>info</i></CardImage>
                </div>
                <div className="card-content center row col s12" style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding: "5px 0",
                    height:"100%"
                }}>
                    <span style={{marginBottom:0, lineHeight:"22px", fontSize:24}} className="card-title flow-text activator grey-text text-darken-4">{item.name}</span>

                    <Modal
                        actions={[
                            <But flat waves="light" modal="close" node="button" ><i className="material-icons" >close</i></But>
                        ]}
                        bottomSheet={true}
                        fixedFooter={false}
                        header="Nutritional Information"
                        id="modal-0"
                        options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                        }}
                        trigger={item.nutrition && item.nutrition["Calories"] != "" ?<a ><h6 >Nutritional Info</h6></a> : null}>

                        {item.nutrition? Object.keys(item.nutrition).map((nut)=><h6>{nut}: {item.nutrition[nut]} </h6> ) : null}

                    </Modal>

                    <Button onClick={()=>addDish(item )} width={windowWidth}  className={"btn-large col s10"} style={{margin:0}}><b>Add</b></Button>

                </div>
                <div className="card-reveal">
                    <h4 className="grey-text card-title text-darken-4"><i className="material-icons right ">close</i>{item.name}</h4>
                    <span className="grey-text text-darken-4" >{item.description}</span>
                    <div style={{height: 150,width:"100%",display:"flex"}}>
                        {item.side ? <SideImage pic={ item.side[1].pic}>

                        </SideImage>:null}
                        {item.side ? <SideImage pic={item.side[2].pic}>

                        </SideImage>:null}
                    </div>

                </div>
            </div>
        </div>
    );


    const deleteMeal= (fav, index) =>{
        console.log("delete meal", fav.toLowerCase(), index)
        mainsList.splice(index,1)
        addMainToList(mainsList)

        fav.toLowerCase().includes("salad") ?addSalad(saladsPicked-1)  : addMain(mainsPicked-1);


    };

    const addDish = (item)=>
    {
        let mains = mainsList;
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

    const nextPage = () =>{
        gotoPage("/confirm")
        setUserOrder({...currentUserOrder, "meals": mainsList})
    };

    const handleOpenModal = () =>{
    };

    return (
        <MealsSelectorContainer>

            <MainHeader className={"center"} width={windowWidth}>

                <MainHeaderText>
                    <h4 style={{margin:0}}> {mainsPicked >0 ? `${meal_count-mainsPicked} Meals Remaining`: `Pick Your ${meal_count} Meals.`} </h4>
                    <h5>With every 4 meals you get a 16oz salad. You have {salad_count - saladsPicked} salads to pick</h5>
                    <div className={"row container center"} style={{ width: "75%", marginBottom: 5}}>
                        <Button className={"col s4 btn "} onClick={()=>setSelected("all")} bgcolor={selected==="all"? colors.bright: colors.secondaryTwo }>All</Button>
                        <Button className={`col s4 btn `} onClick={()=>setSelected(selected==="main"? "all":"main")} bgcolor={selected==="main"? colors.bright: colors.secondaryTwo }>Meals</Button>
                        <Button className={`col s4 btn `} onClick={()=>setSelected(selected==="salad"? "all":"salad")} bgcolor={selected==="salad"? colors.bright: colors.secondaryTwo }>Salads</Button>

                    </div>

                    {mainsList && mainsList.length > 0 ? <Modal
                            actions={[
                                <But flat waves="light" modal="close" node="button" ><i className="material-icons" >close</i></But>
                            ]}
                            bottomSheet={true}
                            fixedFooter={false}
                            header="Selected Meals"
                            id="modal-0"
                            options={{
                                dismissible: true,
                                endingTop: '10%',
                                inDuration: 250,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                opacity: 0.5,
                                outDuration: 250,
                                preventScrolling: true,
                                startingTop: '4%'
                            }}
                            trigger={<h5 style={{color:colors.bright, margin: 0}} onClick={handleOpenModal}><b>Edit Your Selection</b></h5>}>
                            {
                                mainsList.length > 0?
                                    <ChosenMealsList  className={`col s12 center`}>
                                        {<ol>
                                            {mainsList.map((fav,i)=>
                                                <li id={i}   onClick={()=>deleteMeal(fav,i)}><h5>{fav} <i className="material-icons red" >close</i></h5> </li>
                                            )} </ol>
                                        }
                                    </ChosenMealsList>: null
                            }
                        </Modal>: null }
                </MainHeaderText>

            </MainHeader>

            <Mains className={"row center"}>
                {mealList}
            </Mains>

            <ButtonContainer className={"row "}>
                <Button className={"btn-large col m5"} onClick={()=>gotoPage("/deliverydate")}>Go Back</Button>
                <Button className={`btn-large col  m5 ${allMealsPicked?"":"disabled"}`} onClick={nextPage}>Confirm Order</Button>
            </ButtonContainer>



        </MealsSelectorContainer>
    );
};

export default MealsSelector;

const SideImage = styled.div`
    background-image:url(${props => props.pic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    height: 100%;
    width: 50%;
    
`;
const CardImage = styled.div`
    background-image:url(${props => props.pic});
    background-repeat: no-repeat ;
    background-size:  cover ;
    background-position: center;
    height: 100%;
    width: 100%;
    
`;
const MealsSelectorContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding-top:10px;
  grid-area: content;
  flex-direction: column;
  justify-content: space-between;
  
  padding-bottom: 15px;
`;

const Mains = styled.div`
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
  height: 30%;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'text text';
  
`;

const MainHeaderText = styled.div`
  display: flex;
  height: 95%;
  width: 100%;
  grid-area: text;
  justify-content: flex-start;
  flex-direction: column;
`;

const ChosenMealsList = styled.div`
  text-align: left;
  padding: 0 30px !important;
  width: 95%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255,255,255, .2);
`;



