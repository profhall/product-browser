import React, {useState,useContext, useEffect} from 'react';
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";
import {Button, ButtonContainer} from "../shared_comps/Styles";
import {SelectionModal} from "../shared_comps/Modals";
import MealList from "./MealList";
import {MainHeader, MainHeaderText, Mains, MealsSelectorContainer} from "./Styles";


const MealsSelector = () => {
    const {getDimensions,currentUserOrder,setUserOrder, gotoPage, adminStuff} = useContext(AuthContext);
    let {meal_count, meals} = currentUserOrder ? currentUserOrder : 0 ;
    let salad_count =  Math.floor(meal_count/4);

    const [windowWidth, setWidth] = useState(getDimensions().width);
    const [thisWeeksMeals, setMeals] = useState(adminStuff ? adminStuff.recipes : null);
    const [allMealsPicked,validateMeals] = useState(false);
    const [selected,setSelected] = useState("all");
    const [mainsPicked,addMain]= useState(meals.length > 0 ?meals.length-salad_count:0);
    const [mainsList,addMainToList] = useState([]);
    const [saladsPicked,addSalad] = useState(meals ? meals.filter((meal)=>meal.includes("Salad")).length : 0);

    const handleResize = () => setWidth(getDimensions().width);
    window.addEventListener('resize', handleResize);


    useEffect(()=>{
        // to include salads uncomment this next line
        // mainsPicked+saladsPicked === meal_count+salad_count ? validateMeals(true) : validateMeals(false)
        mainsPicked === meal_count ? validateMeals(true) : validateMeals(false)
    },[mainsList]);


    useEffect(()=>{
        addMainToList(meals?meals:mainsList )
    },[]);

    const deleteMeal= (fav, index) =>{
        console.log("delete meal:", fav.toLowerCase())
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
                    // console.log(mainsList)
                    mains = mainsList.concat(item.name);
                    addMain(mainsPicked + 1);
                    addMainToList(mains)
                }
                break;
            case "side":
                console.log("Side Dish To Be Added ")
                break;
            case "salad":
                // console.log("Salad Added ")
                if (saladsPicked < salad_count) {
                    addSalad(saladsPicked+1);
                    mains = mainsList.concat(item.name);
                    addMainToList(mains)
                }
                break;
            default:
                console.log("food has no type")
        }
    };

    const nextPage = () =>{
        gotoPage("/confirm")
        setUserOrder({...currentUserOrder, "meals": mainsList})
    };


    return (
        <MealsSelectorContainer>

            <MainHeader className={"center"} width={windowWidth}>

                <MainHeaderText>

                    <h4 style={{margin:0}}>
                        {
                            mainsPicked >0 ?
                                `${meal_count-mainsPicked} Meals Remaining`
                                :
                                `Pick Your ${meal_count} Meals.`
                        }
                    </h4>

                    {/*<h5>With every 4 meals you get a 16oz salad. You have {salad_count - saladsPicked} salads to pick</h5>*/}

                    <div className={"row"} style={{display:"flex", justifyContent:"space-evenly" ,width: "90%", marginBottom: 5}}>

                        <Button className={"col s3 btn "} onClick={()=>setSelected("all")} bgcolor={selected==="all"? colors.bright: colors.secondaryTwo }>
                            All
                        </Button>

                        <Button className={`col s3 btn `} onClick={()=>setSelected(selected==="main"? "all":"main")} bgcolor={selected==="main"? colors.bright: colors.secondaryTwo }>
                            Meals
                        </Button>

                        <Button className={`col s3 btn `} onClick={()=>setSelected(selected==="salad"? "all":"salad")} bgcolor={selected==="salad"? colors.bright: colors.secondaryTwo }>
                            Salads
                        </Button>

                    </div>

                    {
                        mainsList && mainsList.length > 0 ?
                            <SelectionModal deleteMeal={deleteMeal} mainsList={mainsList}/>: null
                    }

                </MainHeaderText>

            </MainHeader>

            <Mains className={"row center"}>
                <MealList windowWidth={windowWidth} addDish={addDish} selected={selected} thisWeeksMeals={thisWeeksMeals}/>
            </Mains>

            <ButtonContainer className={"row "}>
                <Button className={"btn-large col m5"} onClick={()=>gotoPage("/deliverydate")}>
                    Go Back
                </Button>

                <Button className={`btn-large col  m5 ${allMealsPicked?"":"disabled"}`} onClick={nextPage}>
                    Confirm Order
                </Button>
            </ButtonContainer>



        </MealsSelectorContainer>
    );
};

export default MealsSelector;

