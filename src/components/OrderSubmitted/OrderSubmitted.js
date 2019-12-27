import React, { useCallback,useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {AuthContext, AuthProvider} from "../../Auth/Auth";
import * as firebase from "firebase/app";
import app from "../../fbase";
import 'firebase/firestore';
import {useQueryParams} from "hookrouter";


const OrderSubmitted = () => {
    const {currentUser} = useContext(AuthContext);

    const [delivery_date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [order_time_stamp, setTimestamp] = useState("");
    const [restrictions, setRestrictions] = useState("");
    const [numberOfMeals, setMealCount] = useState("");
    const db = firebase.firestore(app);
    const [queryParams] = useQueryParams();

    let {meal_count, deliver_date} = queryParams;
    let ordersDB = db.collection(`orders`);
    let query = ordersDB.where("uid", "==", currentUser.uid);
    let latest_order={};


    useEffect(() => {
        query.get()
            .then(function(querySnapshot) {
                let delivery_time = 0;
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data());
                    if (doc.data().order_time_stamp > delivery_time){
                        delivery_time = doc.data().order_time_stamp
                        latest_order = doc.data()
                    }
                    console.log("Date as string", ":: ", new Date(delivery_time));
                });

                console.log(latest_order);
                const {address, order_time_stamp, delivery_date, restrictions, meals} =  latest_order;
                setDate(delivery_date);
                setAddress(address);
                setMealCount(meals);
                setRestrictions(restrictions);
                setTimestamp(order_time_stamp);


            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });

    }, [ ]);


    return (
        <ReceiptContainer className={""}>
            <h4>
                Below is a summary of your order, please be sure to send payment to:
                <a target="_blank" href={"https://www.paypal.com/paypalme2/phalljr"}> <b>paypal.me/phalljr</b></a> <br/><br/><b> Orders aren't final until payment is recieved.</b>
            </h4>
            <form style={{margin:"auto"}} className="col s12 ">

            <Receipt className={'container row'} >


                    <div className="col s12 " style={{fontSize:"25px"}}>
                        Delivery Date:
                        <FormInput className="input-field inline ">
                            <input id="delivery" style={{fontSize:"1em", fontWeight:"bolder"}} className={"white-text"} type="text" value={`${delivery_date}`} disabled />
                        </FormInput>
                    </div>
                    <div className="col s12 " style={{fontSize:"25px"}}>
                        Address:
                        <FormInput className="input-field inline">
                            <input id="address" style={{fontSize:"1em", fontWeight:"bolder"}} className={"white-text"} type="text" value={`${address.street} ${address.city} ${address.zip} `}disabled />
                        </FormInput>
                    </div>
                    <div className="col s12 " style={{fontSize:"25px"}}>
                        Number of Meals:
                        <FormInput className="input-field inline">
                            <input id="mealcount" style={{fontSize:"1em", fontWeight:"bolder"}} className={"white-text"} type="text" value={`${meal_count}`} disabled />
                        </FormInput>
                    </div>
                    <div className="col s12  " style={{fontSize:"25px"}} >
                        Total Charges:
                        <FormInput className="input-field inline">
                            <input style={{fontSize:"1em", fontWeight:"bolder"}} id="charges"  className={"white-text"} type="text" value={`${price}`}  />
                        </FormInput>
                    </div>
        </Receipt>
            </form>


        </ReceiptContainer>
    );
};

export default OrderSubmitted;


const ReceiptContainer = styled.div`
  grid-area: content;
  overflow:scroll ;
  display: flex;
  width: 100%;
  padding: 5px;
  justify-self: center;
  flex-direction: column;
`;

const Receipt = styled.div`
  width: 100%;
    border: #4a90e2 solid 1px;
    min-height: 400px;
  background-color: rgba(255,255,255,0.3);
  color:white;
  margin: 0 !important;
`;


const FormInput = styled.div`
color:white;
vertical-align: baseline !important;
font-size: 25px !important;
width:100%;
`;
