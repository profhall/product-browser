import React, {useEffect} from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import  styled from "styled-components";
import {meals, salads, mains, sides} from '../../data'
import colors from "../../Colors";
import OrderList from "./OrderList";


const UserOrders = ({orders}) => {
    useEffect(() => {
        if (orders) console.log(orders)

    }, [orders ]);
    useEffect(() => {

        var elem = document.querySelector(".collapsible");
        var instance = M.Collapsible.init(elem, {});

    });


    const gotoRecipe = (meal)=>{
        console.log('go get this recipe', meal)
        console.log (meals.filter((m)=> m.name ===meal  ))
    };

    return (
        <OrdersContainer className={''}>
            <OrderList orders={orders} />
        </OrdersContainer>
    );
};

export default UserOrders;


const OrdersContainer = styled.div`
  align-self: center;
  min-height:fit-content;
  max-height: 90vh;
  overflow: auto;
  
`
