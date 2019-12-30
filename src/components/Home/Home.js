import React, {useContext,useEffect} from 'react';
import {A, navigate} from "hookrouter";
import {AuthContext} from "../../Auth/Auth";
import styled from "styled-components";
import colors from "../../Colors";

const Home = () => {
    const {currentUser, currentUserProfile, currentUserOrder,nextPage, prevPage} = useContext(AuthContext)
    console.log(currentUser?currentUser.uid:"No user");
    // console.log("The User: "+currentUser.uid)
    useEffect(()=>
    {
        console.log(currentUserProfile);
    }, [currentUserProfile])

    const selectMealCount =()=> {
        navigate('\mealcount')
    }
    return (
        <HomeContainer className={"container"}>
            <h3 style={{margin:0}}>Welcome {currentUserProfile? currentUserProfile.name :  null}</h3>
            <HomeInfoBox>

            </HomeInfoBox>
            <Button className={"btn-large"} onClick={selectMealCount}>
                Lets Get Started
            </Button>
        </HomeContainer>
    );
};

export default Home;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  margin: 12px 0;
`;
const HomeInfoBox = styled.div`
  flex-grow: 4;
  background-color: #4a90e2;
  width: 90vw;
  margin: 12px 0;
`;
const Button = styled.button`
  width:${props=> props.width > 650  ? "60%":"100%"};
  background-color: ${colors.bright};
  &:hover {
    background-color: ${colors.secondaryTwo};
  }
`;