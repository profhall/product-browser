import React from 'react';
import {ButtonContainer} from "../Styles";
import styled from "styled-components";
import colors from "../../Colors";

const Card = ({width,num, ppmeal, total})=> <div className="col s12 m6 l3">
        <div className="card " style={{borderRadius:"10px 10px 0 0"}}>
            <CardDiv className="card-content center ">
                <span className="card-title">{num} Meals</span>
                <b><h4>${total}.00</h4></b>

            </CardDiv>
            <div className="card-action center">

                <b><p>${ppmeal}/meal</p></b>
            </div>
        </div>
</div>

const Prices = () => {
    return (
        <PricesContainer className={"row"}>
            <h4 name="prices">Prices</h4>

            <Card num={4} ppmeal={13.75} total={4*13.75}/>
            <Card num={7} ppmeal={12.14} total={85}/>
            <Card num={10} ppmeal={11} total={10*11}/>
            <Card num={12} ppmeal={10} total={12 *10}/>
        </PricesContainer>
    );
};

export default Prices;

const PricesContainer = styled.div`
  height: 100%;
  grid-area: price;
  color : ${colors.secondaryTwo};

`
const CardDiv = styled.div`
  color : ${colors.bright};
  background-color: ${colors.secondaryTwo};
  border-radius: 10px 10px 0 0 !important;
`
