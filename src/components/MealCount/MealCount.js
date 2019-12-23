import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {A, navigate} from "hookrouter";
import colors from "../../Colors";

const MealButton = ({num, ppmeal, total}) =>{
    return(<Button height={"150px"} >
       <h6> {num} MEALS<br/>
        ${ppmeal}/ MEAL <br/>
           {total} TOTAL</h6>
    </Button>)
}
function getWidth() {
    return window.innerWidth
}


const MealCount = () => {
    const [windowWidth, setWidth] = useState(getWidth);

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(getWidth())
        setWidth(getWidth());

        },[windowWidth])
    return (
        <MealCountSelectionContainer>
            <h3>Pick Number Of Meals</h3>
            <ButtonsContainer width={ windowWidth}>
                <MealButton width={windowWidth} num={4} ppmeal={13.75} total={55}/>
                <MealButton width={windowWidth} num={7} ppmeal={12.14} total={85}/>
                <MealButton width={windowWidth} num={10} ppmeal={11} total={110}/>
                <MealButton width={windowWidth} num={12} ppmeal={10} total={120}/>
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
    `

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