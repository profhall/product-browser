import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {A, navigate, useQueryParams} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';
import DatePicker from 'react-date-picker';

function getWidth() {
    return window.innerWidth
}

const DeliveryDate = () => {
    const [queryParams] = useQueryParams()
    const [startDate, setDate] = useState(null);
    const [del_date, delDate] = useState(null);
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

    function handleDayClick(day) {

        console.log(day.toDateString())

        setDate( day.toDateString() );
        delDate( day);
    }

    return (
        <DeliveryDateContainer className={"center"}>
            <h2>When To Deliver</h2>
            <h5> Meals are delivered on Sundays & Wednesday evenings</h5>
            <h5>Your Chosen Date:<b> {startDate ? `${startDate}` : "pick a day"}</b></h5>
        <CalendarContainer className={"row"}>
            <DatePicker
                onChange={(e)=>handleDayClick(e)}
                value={del_date}
                dayAriaLabel = {"Day"}
            />
            {/*<DayPickerInput*/}
            {/*    disabledDays={{ daysOfWeek: [0,1,2,4,5] }} placeholder={"Start Date"}*/}
            {/*    style={{width:"100%"}}*/}
            {/*    selectedDays={startDate}*/}
            {/*    onDayClick={handleDayClick} />*/}
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
    justify-content: start;


`;
const CalendarContainer = styled.div`
margin : 0 !important;
 color:black;


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