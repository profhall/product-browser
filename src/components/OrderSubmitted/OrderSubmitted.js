import React, { useCallback,useState, useContext, useEffect} from 'react';
import styled from "styled-components";
import {AuthContext, AuthProvider} from "../../Auth/Auth";


const OrderSubmitted = () => {
    const [delivery_date, setDate] = useState();
    const price = "120.00"
    const address = "6003 Farmwood Way SE \nMableton, GA 30126"
    const meal_count = 12
    useEffect(() => {
        setDate("January 23, 2020")
    }, [delivery_date, ]);


    const {currentUser} = useContext(AuthContext);
    return (
        <ReceiptContainer className={""}>
            <h5>
                {currentUser ? currentUser.email :null} below is a summary of your order, please be sure to send payment to:
                <a href={"paypal.me/phalljr"}> paypal.me/phalljr </a>. <br/><br/><b> Orders aren't final until payment is recieved.</b>
            </h5>
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
                            <input id="address" style={{fontSize:"1em", fontWeight:"bolder"}} className={"white-text"} type="text" value={`${address}`}disabled />
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

`;
