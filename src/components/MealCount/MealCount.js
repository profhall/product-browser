import React,{useEffect, useState,useContext} from 'react';
import styled from "styled-components";
import {usePath,useQueryParams, navigate} from "hookrouter";
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";
import {Button, ButtonContainer} from "../Styles";


function getWidth() {
    return window.innerWidth
}


const MealCount = () => {

    const {currentUserOrder,setUserOrder, currentUserProfile,gotoPage} = useContext(AuthContext)
    let numOfMeals = currentUserOrder  ? currentUserOrder.meal_count : null
    const [windowWidth, setWidth] = useState(getWidth);
    const [meal_count, updateMealCount] = useState();
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        currentUserOrder ? console.log(meal_count) : navigate("/")
        setWidth(getWidth());

        },[windowWidth, meal_count])



    const setMealCount = (num)=>{
        console.log(num)
        updateMealCount(num)

    };

    if (meal_count > 0){
        console.log("setting order")
        let price = 0;
        let deliveryFee = 8;
        let containerFee = 15;
        if(meal_count === 4){
            price = 55;
        }
        else if(meal_count === 7){
            price = 85;
        }
        else if(meal_count === 10){
            price = 110;
        }
        else if(meal_count === 12){
            price = 120;
        }
        console.log(currentUserProfile);
        setUserOrder({...currentUserOrder, "meal_count": meal_count, "price" :price + deliveryFee + (currentUserProfile.container_fee_paid ? containerFee : 0)})
    }

    const MealButton = ({width,num, ppmeal, total}) =>{
        return(
            <div className="col s12 m5" onClick={() => setMealCount(num)} >
                <Card className="card-panel ">
                    <span className="white-text">
                        <h5> {num} MEALS</h5>
                        <h5> ${ppmeal}/ MEAL </h5>
                        <h5> ${total} TOTAL</h5>
                    </span>
                </Card>
            </div>)
    };

    return (
        <MealCountSelectionContainer className={"center"}>
            <h2>{numOfMeals > 0 ? `You've chosen ${numOfMeals} meals`:"Choose A Selection"}</h2>
            <ButtonsContainer width={ windowWidth} className={"row"}>
                <MealButton width={windowWidth} num={4} ppmeal={13.75} total={4*13.75}/>
                <MealButton width={windowWidth} num={7} ppmeal={12.14} total={85}/>
                <MealButton width={windowWidth} num={10} ppmeal={11} total={10*11}/>
                <MealButton width={windowWidth} num={12} ppmeal={10} total={12 *10}/>
            </ButtonsContainer>


            <ButtonContainer className={"row "}>
                <Button className={"btn-large col m5 "} onClick={()=>gotoPage("/")}>Go Back</Button>
                <Button className={`btn-large col m5 ${numOfMeals>0?"":"disabled"}`} onClick={()=>gotoPage("/deliverydate")}> Delivery Date</Button>
            </ButtonContainer>
        </MealCountSelectionContainer>
    );
};

export default MealCount;


const MealCountSelectionContainer = styled.div`
    width:100%;
    grid-area:content;
    display: flex;  
    flex-direction: column;
    height: 100%;
    align-content: center;
    align-items: center;
    justify-content: center;
    `;

const Card = styled.div`
background-color: ${colors.secondaryTwo} !important;

&:hover {
    background-color: ${colors.bright} !important;

  }
`;



const ButtonsContainer = styled.div`
    width: 90%;
    display: flex;  
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 25px;
    overflow: auto;
    max-height:400px;
    flex-wrap: wrap;
    // flex-direction: ${props=> props.width > 650  ? "row":"column"};

    `;