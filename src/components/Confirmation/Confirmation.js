import React, {useState,useContext, useEffect} from 'react';
import {navigate} from "hookrouter";
import styled from "styled-components";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";

const Confirmation = () => {
    const {currentUser} = useContext(AuthContext)
    console.log(currentUser.email)

    const [mealCart, setMeals] = useState({mains:[], sides:[], salads:[]});

    return (
        <ConfirmationContainer>
            <h4>Hey {currentUser.email}, please confirm your selections below.</h4>

            <Button className={"btn-large col s12 m6"} onClick={()=>navigate("/submitOrder")}>Submit Order</Button>
        </ConfirmationContainer>
    );
};

export default Confirmation;


const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
  max-width:95vw;
  grid-area: content;
`;

const Button = styled.button`
  margin: auto !important;
  width:${props=> props.width > 650  ? "60%":"100%"};
  background-color: ${colors.bright};
  &:hover {
    background-color: ${colors.secondaryTwo};
  }
`;
