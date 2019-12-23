import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {A, navigate} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';

function getWidth() {
    return window.innerWidth
}

const DeliveryDate = () => {
    const [startDate, setDate] = useState(null);
    const [windowWidth, setWidth] = useState(getWidth);

    useEffect(()=>{
        console.log(getWidth())
        setWidth(getWidth());

    },[windowWidth,startDate])

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    function handleDayClick(day, { selected, disabled }) {
        if (disabled) {
            console.log("day is disabled")
            return;
        }
        if (selected) {
            // Unselect the day if already selected
            setDate( null );
            return;
        }
        console.log(day.toDateString())

        setDate( day.toDateString() );
    }

    return (
        <DeliveryDateContainer>
        <CalendarContainer>
            <h3>When To Deliver</h3>
            <DayPickerInput
                disabledDays={{ daysOfWeek: [0,1,2,4,5] }}
                style={{width:"100%"}}  placeholder={"Start Date"}
                selectedDays={startDate}
                onDayClick={handleDayClick} />
        </CalendarContainer>
            <Button className={"btn-large"} onClick={()=>{navigate("/mealselection")}}>Select Meals</Button>

        </DeliveryDateContainer>
    );
};

export default DeliveryDate;

const DeliveryDateContainer = styled.div`
width:100%;
    grid-area:content;
    display: flex;  
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: start;

`;
const CalendarContainer = styled.div`
margin : 0 !important;

`;

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