import React,{useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import {A, navigate, useQueryParams} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';
import DatePicker from 'react-date-picker';
import {AuthContext} from "../../Auth/Auth";

function getWidth() {
    return window.innerWidth
}

const DeliveryDate = () => {
    const {currentUserProfile, currentUserOrder,setUserOrder, prevPage} = useContext(AuthContext)
    const [queryParams] = useQueryParams()
    const [deliver_date, setDate] = useState(null);
    const [windowWidth, setWidth] = useState(getWidth);
    const {uid} = currentUserProfile
    const {meal_count} = currentUserOrder

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(getWidth())
        console.log("Delivery Date Set")
        setWidth(getWidth());

    },[windowWidth, deliver_date])

    if (deliver_date){
        setUserOrder({...currentUserOrder, "deliver_date": deliver_date})
        console.log(deliver_date)

    }

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
        setDate( day.toDateString() );
    }


    return (
        <DeliveryDateContainer className={"center"}>
            <h2>When To Deliver</h2>
            <h5> Meals are delivered on Sundays & Wednesday evenings</h5>
            <h5>Your Chosen Date:<b> {deliver_date ? `${deliver_date}` : "pick a day"}</b></h5>

        <CalendarContainer className={"row"}>
                <DayPickerInput
                    disabledDays={{ daysOfWeek: [1,2,4,5,6] }}
                    style={{width:"100%"}}  placeholder={"Start Date"}
                    selectedDays={deliver_date}
                    onDayClick={handleDayClick}
                    />
                <h5>Your Chosen Date:<b> {deliver_date ? `${deliver_date}` : "pick a day"}</b></h5>
        </CalendarContainer>

        {/*<CalendarContainer className={"row"}>*/}
        {/*    <DatePicker*/}
        {/*        onChange={(e)=>handleDayClick(e)}*/}
        {/*        value={del_date}*/}
        {/*        dayAriaLabel = {"Day"}*/}
        {/*    />*/}

        {/*</CalendarContainer>*/}

            <ButtonContatiner className={"row center"}>
                <Button className={"btn-large col s12 m5"} onClick={()=>prevPage("/mealcount")}>Go Back</Button>
                <Button className={"btn-large"} onClick={()=>{navigate("/mealselection", false, currentUserOrder)}}>Select Meals</Button>
            </ButtonContatiner>
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
const ButtonContatiner = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

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