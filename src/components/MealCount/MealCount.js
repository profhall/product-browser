import React,{useEffect, useState,useContext} from 'react';
import styled from "styled-components";
import {usePath,useQueryParams, navigate} from "hookrouter";
import colors from "../../Colors";
import {AuthContext} from "../../Auth/Auth";


function getWidth() {
    return window.innerWidth
}


const MealCount = () => {

    const {currentUserOrder,setUserOrder, currentUserProfile,gotoPage} = useContext(AuthContext)
    let numOfMeals = currentUserOrder.meal_count ? currentUserOrder.meal_count : null
    const [windowWidth, setWidth] = useState(getWidth);
    const [meal_count, updateMealCount] = useState();
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(meal_count);
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
        return(<Button style={{width:`${windowWidth > 650  ? "225px":"75%"}`}} onClick={() => setMealCount(num)} height={"225px"} width={width} >
                <h5> {num} MEALS</h5>
                <h5> ${ppmeal}/ MEAL </h5>
                <h5> ${total} TOTAL</h5>
        </Button>)
    };

    return (
        <MealCountSelectionContainer className={"center"}>
            <h2>{numOfMeals > 0 ? `You've chosen ${numOfMeals} meals`:"Choose A Selection"}</h2>
            <ButtonsContainer width={ windowWidth}>
                <MealButton width={windowWidth} num={4} ppmeal={13.75} total={4*13.75}/>
                <MealButton width={windowWidth} num={7} ppmeal={12.14} total={7*12.14}/>
                <MealButton width={windowWidth} num={10} ppmeal={11} total={10*11}/>
                <MealButton width={windowWidth} num={12} ppmeal={10} total={12 *10}/>
            </ButtonsContainer>


            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col m5 flow-text"} onClick={()=>gotoPage("/")}>Go Back</Button>
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
    justify-content: space-evenly;
    `;


const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 85%;
  justify-content:center;
  align-content:center;

`;

const ButtonsContainer = styled.div`
    width: 85%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    overflow: auto;
    max-height:375px;
    flex-direction: ${props=> props.width > 650  ? "row":"column"};

    `
const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`