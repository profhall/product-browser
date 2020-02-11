import React, {useContext,useEffect} from 'react';
import {A, navigate} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";
import {Button} from "../Styles";
import today from "../../testDays/testDays"

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

const Home = () => {
    const {currentUser, currentUserProfile, currentUserOrder,gotoPage} = useContext(AuthContext)
    // console.log(currentUser?currentUser.uid:"No user");
    // console.log("The User: "+currentUser.uid)
    useEffect(()=>
    {
        console.log(currentUserProfile,currentUserOrder);
    }, [currentUserProfile])


    return (
        <HomeContainer className={"container"}>
            <h3 style={{margin:0}}> Happy {Object.keys(days).find(key => days[key] === todays_date_number)} {currentUserProfile? " " +currentUserProfile.name+ "!" :  "!"}</h3>
            <HomeInfoBox>
                <h4>Thank you for eating at The Tasty Plant-Based Kitchen, we're so glad you came. We hope you enjoy <span style={{color:colors.bright}} onClick={()=>gotoPage('\menu')}>this weeks menu</span>.</h4> <br/>
                {todays_date_number === days.Tuesday ? <h3 >Today is Tuesday! That means we are updating our menu. Orders can resume on Wednesday. Thanks for your patience!</h3>: null}
            </HomeInfoBox>
            {todays_date_number === days.Tuesday ? null :<Button className={"btn-large"} onClick={()=>gotoPage('\mealcount')}>
                {currentUserOrder && currentUserOrder.meal_count ? "Continue Order" : "Start Your Order"}
            </Button>}
        </HomeContainer>
    );
};

export default Home;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: 100%;
  margin: auto;
  padding: 15px 0 ;
`;
const HomeInfoBox = styled.div`
  height: 40% ;
  font-size: large;
  width: 100%;
  margin: 12px 0;
`;