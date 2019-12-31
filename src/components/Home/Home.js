import React, {useContext,useEffect} from 'react';
import {A, navigate} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";

const Home = () => {
    const {currentUser, currentUserProfile, currentUserOrder,gotoPage} = useContext(AuthContext)
    console.log(currentUser?currentUser.uid:"No user");
    // console.log("The User: "+currentUser.uid)
    useEffect(()=>
    {
        console.log(currentUserProfile);
    }, [currentUserProfile])


    return (
        <HomeContainer className={"container"}>
            <h3 style={{margin:0}}>Welcome back {currentUserProfile? currentUserProfile.name :  null}</h3>
            <HomeInfoBox>
                <h5>First of all thanks for eating with us at The Tasty Plant-Based Kitchen, we are so glad you have chosen to eat with us. We hope you enjoy this weeks menu (<span onClick={()=>gotoPage('\menu')}>See Menu</span>)</h5>
            </HomeInfoBox>
            <Button className={"btn-large"} onClick={()=>gotoPage('\mealcount')}>
                Start Order
            </Button>
        </HomeContainer>
    );
};

export default Home;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 100%;
  margin: auto;
  padding: 15px 0 ;
`;
const HomeInfoBox = styled.div`
  flex-grow: 4;
  font-size: large;
  width: 100%;
  margin: 12px 0;
`;
const Button = styled.button`
  width: 65%;
  align-self: center;
  background-color: ${colors.bright};
  &:hover {
    background-color: ${colors.secondaryTwo};
  }
`;