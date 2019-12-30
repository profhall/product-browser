import React, {useState,useContext, useEffect} from 'react';
import {navigate, useQueryParams} from "hookrouter";
import styled from "styled-components";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';

const Confirmation = () => {
    const {currentUserProfile, currentUserOrder,nextPage, prevPage} = useContext(AuthContext)

    const user = currentUserProfile;
    const db = firebase.firestore(app);
    const {meal_count} = currentUserOrder
    let deliveryFee = 8;
    let containerFee = 15;
    let price = 0;
    if(meal_count === 4){
        price = 55;
    }
    else if(meal_count === 7){
        price = 85;
    }
    else if(meal_count === 10){
        price = 110;
    }
    else if(meal_count === 12){
        price = 120;
    }

    //I need 2 useEffects or else i kept getting an indefinite loop because i was tryin to track iteam that kept getting update
    useEffect(()=>
    {
        console.log(currentUserOrder)
    }, [])

    const handleSubmit = () =>{
        const ordersDB = db.collection(`orders`)
        ordersDB.add({...currentUserOrder, "order_time_stamp": Date.now()})
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                nextPage("/order_submitted")
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    };
    return (
        <ConfirmationContainer className={"center"}>

            <h4 style={{margin:0}}>
                {user.name}, confirm the information below. <br/>
                No deal is final until payment is received. Send payment to:
                <a target="_blank" href={"https://www.paypal.com/paypalme2/phalljr"}><b>paypal.me/phalljr</b></a>
            </h4>
            <ConfirmInfo >
                <form>
                    Deliver Address: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentUserOrder.address ? currentUserOrder.address.street: ""}  ${currentUserOrder.address ? currentUserOrder.address.city: ""}, ${currentUserOrder.address ? currentUserOrder.address.zip: ""} `} />
                    </FormInputDiv>
                    <br/>

                    Delivery Date:
                    <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentUserOrder.deliver_date ? currentUserOrder.deliver_date: ""}`} />
                    </FormInputDiv>
                    <br/>

                    Meal Count: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={currentUserOrder.meal_count} />
                    </FormInputDiv>
                    <br/>
                    Dietary Restrictions: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentUserOrder.restrictions ? currentUserOrder.restrictions: ""}`} />
                    </FormInputDiv>
                    <br/>

                    Total Charges:
                    <FormInputDiv className="input-field inline col s12">
                        <FormInput value={` $${currentUserOrder.price } ($${price} + $${deliveryFee} ${!user.container_fee_paid ? "+ $" +containerFee+ "" : ""})`} />
                    </FormInputDiv>
                </form>
            </ConfirmInfo>

            <h4>
            Every order has an <Numbers>${deliveryFee}</Numbers> delivery fee. <br/>There is a one time container fee of <Numbers>${containerFee}</Numbers> for new clients.
            </h4>


            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col s12 m4"} onClick={()=>prevPage("/mealselection")}>Go Back</Button>
                <Button className={"btn-large col s12 m6"} onClick={handleSubmit }>Submit Order</Button>

            </ButtonContainer>
        </ConfirmationContainer>
    );
};

export default Confirmation;
const Numbers = styled.b`
color:${colors.bright};
text-decoration: underline;
`

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
  max-width:95vw;
  grid-area: content;
  align-items: center;
  justify-self: center;
  padding-top: 10px;
`;
const ConfirmInfo = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 12px;
  font-size: 25px;
  font-weight: bold ;

`;

const Button = styled.button`
  margin: auto !important;
  width:${props=> props.width > 650  ? "60%":"100%"};
  background-color: ${colors.bright};
  &:hover {
    background-color: ${colors.secondaryTwo};
  }
`;

const FormInputDiv = styled.div`
color:white;
vertical-align: baseline !important;
font-size: 25px !important;

`;


const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

`;
const FormInput = styled.input`
color:${colors.bright};
font-size: 25px !important;
font-weight: bolder ;
`;