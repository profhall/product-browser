import React, {useContext,useEffect} from 'react';
import {A, navigate} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";
import {Button} from "../Styles";

const Home = () => {
    const {currentUser, currentUserProfile, currentUserOrder,gotoPage} = useContext(AuthContext)
    // console.log(currentUser?currentUser.uid:"No user");
    // console.log("The User: "+currentUser.uid)
    useEffect(()=>
    {
        // console.log(currentUserProfile);
    }, [currentUserProfile])


    return (
        <HomeContainer className={"container"}>
            <h3 style={{margin:0}}>Greetings{currentUserProfile? " " +currentUserProfile.name+ "!" :  "!"}</h3>
            <HomeInfoBox>
                <h4>Thank you for eating with at The Tasty Plant-Based Kitchen, we're so glad you came. We hope you enjoy this weeks menu. (<span style={{color:colors.bright}} onClick={()=>gotoPage('\menu')}>See Menu</span>)</h4>
            </HomeInfoBox>
            <Button className={"btn-large"} onClick={()=>gotoPage('\mealcount')}>
                Start Your Order
            </Button>
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