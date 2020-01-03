import React, {useState,useContext, useEffect} from 'react';
import {navigate, useQueryParams} from "hookrouter";
import styled from "styled-components";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';

const Confirmation = () => {
    const {currentUserProfile, currentUserOrder, gotoPage} = useContext(AuthContext)

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
                navigate("/order_submitted",true)
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
                <ConfirmForm className={"row"}>
                    <FormInputDiv className="input-field inline col s12 ">
                        <FormInput autoFocus id="address"  value={`${currentUserOrder.address ? currentUserOrder.address.street: ""}  ${currentUserOrder.address ? currentUserOrder.address.city: ""}, ${currentUserOrder.address ? currentUserOrder.address.zip: ""} `} type="text"/>
                        <Label htmlFor="address">Delivery Address:</Label>

                    </FormInputDiv>

                    <FormInputDiv className="input-field col s12 m6 ">
                        <FormInput autoFocus id="deliver_date" type="text" value={`${currentUserOrder.deliver_date ? currentUserOrder.deliver_date: ""}`} />
                        <Label htmlFor="deliver_date">Delivery Date:</Label>
                    </FormInputDiv>

                    <FormInputDiv className="input-field col s12 m6 ">
                        <FormInput autoFocus  id="meals" type="text" value={currentUserOrder.meal_count}/>
                        <Label htmlFor="meals" >Meal Count:</Label>
                    </FormInputDiv>

                    <FormInputDiv className="input-field col s12 m6 ">
                        <FormInput autoFocus id="dietary_restrictions" type="text" value={`${currentUserOrder.restrictions ? currentUserOrder.restrictions: ""}`} />
                        <Label htmlFor="dietary_restrictions:">Dietary Restrictions:</Label>
                    </FormInputDiv>

                    <FormInputDiv className="input-field col s12 m6 ">
                        <FormInput autoFocus  id="fees" type="text" value={` $${currentUserOrder.price } ($${price} + $${deliveryFee} ${!user.container_fee_paid ? "+ $" +containerFee+ "" : ""})`}/>
                        <Label htmlFor="fees" >Total Charges:</Label>
                    </FormInputDiv>



                </ConfirmForm>

            <h4>
            Every order has an <Numbers>${deliveryFee}</Numbers> delivery fee. <br/>There is a one time container fee of <Numbers>${containerFee}</Numbers> for new clients.
            </h4>


            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col  m5"} onClick={()=>gotoPage("/mealselection")}>Go Back</Button>
                <Button className={"btn-large col  m5"} onClick={handleSubmit }>Submit Order</Button>

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
  margin: auto;
  flex-direction: column;
  height: 100%;
  width: 100%;
  grid-area: content;
  align-items: center;
  padding-top: 10px;
    overflow: auto;

`;

const ConfirmForm = styled.form`
  width: 80%;
  margin: auto;
  
  font-size: 25px;
  font-weight: bold ;
`;
// const ConfirmInfo = styled.div`
//   flex-direction: column;
//   width: 100%;
//   margin: 12px;
//   font-size: 25px;
//   font-weight: bold ;
// `;


const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`

const FormInputDiv = styled.div`
color:white;
vertical-align: baseline !important;
font-size: 25px !important;

`;


const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
  margin-left: 0 !important;

`;

const Label = styled.label`
font-weight: bolder;
font-size:x-large !important;
color:${colors.bright} !important;

`;
const FormInput = styled.input`
    color:white;
    font-size: 25px !important;
    font-weight: bolder ;
`;