import React, {useState,useContext, useEffect} from 'react';
import {navigate, useQueryParams} from "hookrouter";
import styled from "styled-components";
import {AuthContext} from "../../Auth/Auth";
import colors from "../../Colors";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';

function submitOrder(order, DB){
    console.log(order, DB)
    let orderSet = false;
    let orderNum = 1

    while (!orderSet && orderNum<5){

        let orderDB = DB.doc(String(orderNum))
        orderDB.get().then( function(doc) {
            if (doc.exists) {
                // clone =  doc.data();
                console.log("Document data:", doc.data());
                orderNum++
                console.log(orderSet, orderNum)

            } else {
                // doc.data() will be undefined in this case
                orderSet = true
                console.log(orderSet, orderNum)

                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }
}

const Confirmation = () => {
    const [user, setUser] = useState({});
    const [currentOrder, setOrder] = useState({});
    const {currentUser} = useContext(AuthContext);
    const db = firebase.firestore(app);
    let clone = {};
    let userDB = db.collection(`users`).doc(currentUser.uid);

    const [queryParams] = useQueryParams();
    let {meal_count, deliver_date} = queryParams;
    const meals = Object.keys(queryParams).map((i)=>{
        if(!isNaN(i)) {return queryParams[i]}
    }).filter((i)=>i!==undefined);


    let price = 0;
    let deliveryFee = 8;
    let containerFee = 15;
    meal_count = Number(meal_count)
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
        // console.log(currentOrder)
        let order =    {
            "uid": currentUser.uid,
            "meals": meals,
            "delivery_date": deliver_date,
            "address":  user.address,
            "restrictions": user.dietary_restrictions,
            "charges": price+deliveryFee+(!user.container_fee_paid ? containerFee : 0)
            // "order_time_stamp":  firebase.firestore.Timestamp.fromDate(new Date())
            // "order_time_stamp": Date(Date.now()).toString().split(/\s+/).slice(0,5).join(" ")
        };

        setOrder(order)
    }, [user])

    useEffect(   () =>  {
         userDB.get().then(   function(doc) {
            if (doc.exists) {
                clone =   doc.data();
                setUser(clone);
                console.log("Document data:", clone);


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

             return () => {
                 // removing the listener when props.x changes
             }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });


    }, []);

    const handleSubmit = () =>{
        const ordersDB = db.collection(`orders`)

        // ordersDB.doc(user.user.uid).set(currentOrder);

        // console.log(currentOrder, ordersDB)
        let orderSet = false;
        console.log(currentOrder)

        ordersDB.add({...currentOrder, "order_time_stamp": Date.now()})
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                orderSet=true
                navigate("/order_submitted")
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        // submitOrder(currentOrder, ordersDB)
    };
    return (
        <ConfirmationContainer className={"center"}>

            <h4>
                {user.name}, confirm the information below. <br/>
                No deal is final until payment is received. Send payment to:
                <a target="_blank" href={"https://www.paypal.com/paypalme2/phalljr"}><b>paypal.me/phalljr</b></a>
            </h4>
            <ConfirmInfo >
                <form>
                    Deliver Address: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentOrder.address ? currentOrder.address.street: ""}  ${currentOrder.address ? currentOrder.address.city: ""}, ${currentOrder.address ? currentOrder.address.zip: ""} `} />
                    </FormInputDiv>
                    <br/>

                    Delivery Date:
                    <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentOrder.delivery_date ? currentOrder.delivery_date: ""}`} />
                    </FormInputDiv>
                    <br/>

                    Meal Count: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={meal_count} />
                    </FormInputDiv>
                    <br/>
                    Dietary Restrictions: <FormInputDiv className="input-field inline col s12 ">
                        <FormInput  value={`${currentOrder.restrictions ? currentOrder.restrictions: ""}`} />
                    </FormInputDiv>
                    <br/>

                    Total Charges:
                    <FormInputDiv className="input-field inline col s12">
                        <FormInput value={` $${user.container_fee_paid ? price+deliveryFee : price+deliveryFee+containerFee } ($${price} + $${deliveryFee} ${!user.container_fee_paid ? "+ $" +containerFee+ "" : ""})`} />
                    </FormInputDiv>
                </form>
            </ConfirmInfo>

            <h4>
            Every order has an <Numbers>${deliveryFee}</Numbers> delivery fee. <br/>There is a one time container fee of <Numbers>${containerFee}</Numbers> for new clients.
            </h4>


            <ButtonContainer className={"row center"}>
                <Button className={"btn-large col s12 m4"} onClick={()=>{navigate("/mealselection",false,[],false)}}>Go Back</Button>
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
  width: 75%;
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