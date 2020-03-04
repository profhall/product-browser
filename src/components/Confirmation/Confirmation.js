import React, {useState,useContext, useEffect} from 'react';
import {navigate, useQueryParams} from "hookrouter";
import styled from "styled-components";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';
import emailjs from "emailjs-com";
import {Button} from "../shared_comps/Styles";

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
        // console.log(currentUserOrder)
    }, [])

    const handleSubmit = () =>{
        const ordersDB = db.collection(`orders`)
        ordersDB.add({...currentUserOrder, "order_time_stamp": Date.now()})
            .then(function(docRef) {
                // console.log("Document written with ID: ", docRef.id);

                const theSubmitInfo =
                    {

                        "chosen_items":currentUserOrder? currentUserOrder.meals.map((meal,i)=><h2>/n/ {i}. {meal}</h2>) : null,
                        "name":currentUserProfile ? currentUserProfile["name"]: null,
                        "email":currentUserProfile ? currentUserProfile["email"]: null,
                        "state":currentUserProfile && currentUserProfile["address"].state ? currentUserProfile["address"].state : null,
                        "city":currentUserProfile ? currentUserProfile["address"]["city"]: null,
                        "zip":currentUserProfile ? currentUserProfile["address"]["zip"]: null,
                        "street": currentUserProfile ? currentUserProfile["address"]["street"]: null,
                        "delivery_date": currentUserOrder ? currentUserOrder["delivery_date"]: null,
                        "restrictions": currentUserOrder ? currentUserOrder["restrictions"]: null,
                        "meal_count": currentUserOrder ? currentUserOrder["price"]: null,
                        "total": currentUserOrder ? currentUserOrder["meal_count"]: null,

                    };

                emailjs.send('meal_prep', 'template_awzr3ptv', theSubmitInfo, "user_p8ucvKr8lnqx5SwxOEshJ")
                        .then(function(response) {
                            // console.log('SUCCESS!', response.status, response.text);

                            emailjs.send('receiptemail', 'customer_receipt', theSubmitInfo, "user_p8ucvKr8lnqx5SwxOEshJ")
                                .then(function(response) {
                                    // console.log('SUCCESS!', response.status, response.text);
                                }, function(error) {
                                    console.log('FAILED...', error);
                                });

                        }, function(error) {

                            console.log('FAILED...', error);
                        });



                navigate("/order_submitted",true)

            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    };
    return (
        <ConfirmationContainer className={"center"}>

            <h5 style={{margin:0}}>
                Confirm the information below. <br/>
                {/*Send payment to:*/}
                {/*<a target="_blank" href={"https://www.paypal.com/paypalme2/phalljr"}><b>paypal.me/phalljr</b></a>*/}
            </h5>

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

            <h5>
            Every order has an <Numbers>${deliveryFee}</Numbers> delivery fee. <br/>There is a one time container fee of <Numbers>${containerFee}</Numbers> for new clients.
            </h5>


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
justify-content: space-around;
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
  margin: 0 !important;
  font-size: 22px;
  font-weight: bold ;
`;

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

const PaymentButtons = styled.div`
display: flex;

`
const FormInput = styled.input`
    color:white;
    font-size: 25px !important;
    font-weight: bolder ;
`;