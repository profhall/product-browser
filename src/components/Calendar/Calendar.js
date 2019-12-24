import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {A, navigate, useQueryParams} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';

function getWidth() {
    return window.innerWidth
}

const DeliveryDate = () => {
    const [queryParams] = useQueryParams()
    const [startDate, setDate] = useState(null);
    const [windowWidth, setWidth] = useState(getWidth);
    const {u_id,meal_count} = queryParams
    let currentOrder = {}
    currentOrder["u_id"]=u_id;
    currentOrder["meal_count"]=meal_count;


    useEffect(()=>{
        console.log(getWidth())
        setWidth(getWidth());

        currentOrder["deliver_date"]=startDate

        console.log(currentOrder)
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
        <CalendarContainer className={"center"}>
            <h2>When To Deliver</h2>
            <h5> Meals are delivered on Sundays & Wednesday evenings</h5>
            <h5>Your Chosen Date:<b> {startDate ? `${startDate}` : "pick a day"}</b></h5>

            <DayPickerInput
                disabledDays={{ daysOfWeek: [0,1,2,4,5] }}
                style={{width:"100%"}}  placeholder={"Start Date"}
                selectedDays={startDate}
                onDayClick={handleDayClick} />
        </CalendarContainer>
            <Button className={"btn-large"} onClick={()=>{navigate("/mealselection", false, currentOrder)}}>Select Meals</Button>

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