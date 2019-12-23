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
    console.log(window.location.href)
    console.log(queryParams)
    const {userId} = queryParams
    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);
    let currentOrder = {}

    useEffect(()=>{
        console.log(meal_count)
        setWidth(getWidth());


        },[windowWidth, meal_count])


    const setMealCount = (num)=>{
        console.log(num)

        updateMealCount(num)
    }

    const MealButton = ({num, ppmeal, total}) =>{
        return(<Button onClick={() => setMealCount(num)} height={"150px"} >
            <h6> {num} MEALS<br/>
                ${ppmeal}/ MEAL <br/>
                {total} TOTAL</h6>
        </Button>)
    }
    return (
        <MealCountSelectionContainer>
            <h1>{meal_count > 0 ? `You've chosen ${meal_count} meals`:"Pick the number of meals"}</h1>
            <ButtonsContainer width={ windowWidth}>
                <MealButton width={windowWidth} num={4} ppmeal={13.75} total={4*13.75}/>
                <MealButton width={windowWidth} num={7} ppmeal={12.14} total={7*12.14}/>
                <MealButton width={windowWidth} num={10} ppmeal={11} total={10*11}/>
                <MealButton width={windowWidth} num={12} ppmeal={10} total={12 *10}/>
            </ButtonsContainer>
            <Button className={"btn-large"} onClick={()=>{navigate("/deliverydate")}}>Pick A Delivery Date</Button>
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
    justify-content: start;
    `;

const ButtonsContainer = styled.div`
    width: 95%;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    height: 45%; 
    overflow: auto;
    max-height:250px;
    flex-direction: ${props=> props.width > 650  ? "row":"column"};

    `

const Button = styled.button`
    color:white;
    margin: 7px;
    //align-items: center; 
    width:${props=> props.width > 650  ? "150px":"75%"};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`