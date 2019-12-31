import React,{useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import {A, navigate, useQueryParams} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';
import 'react-day-picker/lib/style.css';import DatePicker from 'react-date-picker';
import {AuthContext} from "../../Auth/Auth";

function getWidth() {
    return window.innerWidth
}

const DeliveryDate = () => {
    const {currentUserOrder,setUserOrder, gotoPage} = useContext(AuthContext)
    let date = currentUserOrder.deliver_date ? currentUserOrder.deliver_date : null

    const [deliver_date, setDate] = useState(null);
    const [windowWidth, setWidth] = useState(getWidth);

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);

    useEffect(()=>{
        console.log(getWidth())
        console.log("Delivery Date Set: ",deliver_date)
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
            <h5>Your Chosen Date:<b> {date ? `${date}` : "pick a day"}</b></h5>

        <CalendarContainer className={"row"}>
                <DayPickerInput
                    disabledDays={{ daysOfWeek: [1,2,4,5,6] }}
                    style={{width:"100%"}}  placeholder={"Start Date"}
                    selectedDays={date}
                    onDayClick={handleDayClick}
                    />
        </CalendarContainer>




            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col m5"} onClick={()=>gotoPage("/mealcount")}>Go Back</Button>
                <Button className={`btn-large col m5 ${date?"":"disabled"}`} onClick={()=>gotoPage("/mealselection")}>Select Meals</Button>
            </ButtonContainer>
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
    height: 100%;
    border: orangered solid 1px;


`;

const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

`;

const CalendarContainer = styled.div`
margin : 0 !important;
 color: ${colors.bright};

`;

const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`