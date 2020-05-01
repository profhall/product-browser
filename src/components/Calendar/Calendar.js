import React,{useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import {A, navigate, useQueryParams} from "hookrouter";
import colors from "../../Colors";
import DayPickerInput from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {AuthContext} from "../../Auth/Auth";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';
import {Button, ButtonContainer} from "../shared_comps/Styles";
import today from "../../testDays/testDays"


function getWidth() {
    return window.innerWidth
}
const days ={
    "Sunday":0,
    "Monday":1,
    "Tuesday":2,
    "Wednesday":3,
    "Thursday":4,
    "Friday":5,
    "Saturday":6
}

let todays_date_number = today.getDay()

let yesterday = new Date();
let tomorrow = new Date();
let clearDays = [ new Date(2020, 1, 19), new Date(2020, 1, 26)  ]

tomorrow.setDate(today.getDate() + 1);
yesterday.setDate(today.getDate() - 1);
var daysInAWeek = 7;

let weekFromToday = new Date( );
let threeDaysFromToday = new Date( );
let twoDaysFromToday = new Date( );
weekFromToday.setDate(today.getDate() + daysInAWeek);
threeDaysFromToday.setDate(today.getDate() + 3);
twoDaysFromToday.setDate(today.getDate() + 2);

const DeliveryDate = () => {



    const maxMealsADay = 30
    const daysToIgnore = [
            ...clearDays,
        todays_date_number === 6 ?  tomorrow:null,
        {
            before:  todays_date_number === days.Tuesday? twoDaysFromToday:tomorrow ,
            after:todays_date_number === 0 ?  threeDaysFromToday  : todays_date_number === days.Monday ? twoDaysFromToday :weekFromToday },
        { daysOfWeek:[0,today,6]}
    ]
    // console.log(daysToIgnore,tomorrow)

    const db = firebase.firestore(app);

    const {currentUserOrder,setUserOrder, gotoPage} = useContext(AuthContext)
    let date = currentUserOrder ? currentUserOrder.deliver_date : null

    const [deliver_date, setDate] = useState(null);
    const [pickup, setPickUp] = useState(false);
    const [disabledDays, updateDisabledDays] = useState(daysToIgnore);
    const [tooManyMeals, setTooManyMeals] = useState(false);
    const [windowWidth, setWidth] = useState(getWidth);

    const handleResize =()=> setWidth(getWidth());
    window.addEventListener('resize', handleResize);




    useEffect(()=>{
        // console.log("Delivery Date Set: ",deliver_date)
        setWidth(getWidth());
        db.collection("orders").where("deliver_date", "==", deliver_date ).get()
            .then(function(querySnapshot) {
                let numberOfMealsOnThisDay = 0
                let deliver_date_array = deliver_date.split(" ")
                deliver_date_array.shift()
                deliver_date_array = deliver_date_array.join("-")
                // console.log( deliver_date_array)
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    numberOfMealsOnThisDay += Number(doc.data()["meal_count"])
                    // console.log("number of meals on this order => ", doc.data()["meal_count"]);

                });
                // console.log("number of meals on this day => ", numberOfMealsOnThisDay);


                if(numberOfMealsOnThisDay >= maxMealsADay){
                    setTooManyMeals(true)
                    daysToIgnore.push(new Date(deliver_date_array))
                    // console.log(daysToIgnore)
                    updateDisabledDays(daysToIgnore)
                    // console.log("too many meals")
                }
                else{
                    setTooManyMeals(false)
                }

            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });


    },[windowWidth, deliver_date, pickup])

    useEffect(()=>{
        // console.log(disabledDays)
        // console.log("Delivery Date Set: ",deliver_date)



    },[tooManyMeals, disabledDays])

    // useEffect(()=>{
    // console.log(pickup)
    //
    // },[pickup])

    useEffect(()=>{
        currentUserOrder && currentUserOrder.meal_count ? navigate("#") : navigate("/")

        if ([3,4,5].includes(todays_date_number) ) {
            switch (todays_date_number) {
                case 3:
                    console.log("Today is Wednesday")

                    break;
                case 4 || 5:
                    console.log("Today is Thursday or Friday")

                    break;
                default:
                    console.log("Switch default")

            }
        }
        else if ([0,1,2].includes(todays_date_number) ){
            switch (todays_date_number) {
                case 0:
                    console.log("Today is Sunday")

                    break;
                case 1 :
                    console.log("Today is Monday")

                    break;
                case 2 :
                    console.log("Today is Tuesday: menu update day, and ordering is disabled")

                    break;
                default:
                    console.log("Switch default")

            }
            //enable the following wednesday and Sunday


        }

    },[])





    if (deliver_date){
        if (pickup) setUserOrder({...currentUserOrder, "deliver_date": deliver_date, pick_up:pickup})
        setUserOrder({...currentUserOrder, "deliver_date": deliver_date})
        // console.log(deliver_date)

    }



    function handleDayClick(day, { selected, disabled }) {
        console.log(day)

        if (disabled) {
            // console.log("day is disabled")
            return;
        }
        if (selected) {
            // Unselect the day if already selected
            setDate( null );
            return;
        }
        setDate( day.toDateString() );

    }

    function addDay(days, dayToAdd) {
        days.concat(dayToAdd)
        return days
    }

    return (
        <DeliveryDateContainer className={"center"}>
            <h2>When To Deliver</h2>
            <h5> Meals are delivered on Sundays & Wednesday evenings</h5>
            <h5>Your Chosen{pickup ? " Pickup ":" "}Date:<b style={{color:colors.bright}}> {date ? `${date}` : "pick a day"}</b></h5>

        <CalendarContainer className={"row"}>
                <DayPickerInput
                    disabledDays={daysToIgnore
                    }
                    style={{width:"100%"}}  placeholder={"Start Date"}
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
  width:80%;
    grid-area:content;
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;


`;


const CalendarContainer = styled.div`
margin : 0 !important;
 color: ${colors.bright};
 font-weight: bolder;

`;
