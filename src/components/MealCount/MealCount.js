import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {usePath,useQueryParams, navigate} from "hookrouter";
import colors from "../../Colors";


function getWidth() {
    return window.innerWidth
}


const MealCount = () => {

    const [queryParams] = useQueryParams()
    const [windowWidth, setWidth] = useState(getWidth);
    const [meal_count, updateMealCount] = useState(0);
    // console.log(window.location.href)
    // console.log(queryParams)
    const {user} = queryParams
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);
    let currentOrder = {}

    useEffect(()=>{
        console.log(meal_count)
        setWidth(getWidth());
        currentOrder["u_id"]=user
        currentOrder["meal_count"]=meal_count

        },[windowWidth, meal_count])


    const setMealCount = (num)=>{
        console.log(num)
        updateMealCount(num)
    }

    const MealButton = ({width,num, ppmeal, total}) =>{
        return(<Button onClick={() => setMealCount(num)} height={"225px"} width={width} >
                <h5> {num} MEALS</h5>
                <h5> ${ppmeal}/ MEAL </h5>
                <h5> {total} TOTAL</h5>
        </Button>)
    }
    return (
        <MealCountSelectionContainer className={"center"}>
            <h2>{meal_count > 0 ? `You've chosen ${meal_count} meals`:"Pick the number of meals"}</h2>
            <ButtonsContainer width={ windowWidth}>
                <MealButton width={windowWidth} num={4} ppmeal={13.75} total={4*13.75}/>
                <MealButton width={windowWidth} num={7} ppmeal={12.14} total={7*12.14}/>
                <MealButton width={windowWidth} num={10} ppmeal={11} total={10*11}/>
                <MealButton width={windowWidth} num={12} ppmeal={10} total={12 *10}/>
            </ButtonsContainer>


            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col s12 m5"} onClick={()=>{navigate("/",false,[])}}>Go Back</Button>
                <Button className={"btn-large col s12 m5"} onClick={()=>{navigate("/deliverydate", false, currentOrder)}}> Delivery Date</Button>
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
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    `;


const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

`;

const ButtonsContainer = styled.div`
    width: 95%;
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
    width:${props=> props.width > 650  ? "225px":"75%"};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`