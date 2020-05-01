import React from 'react';
import {ButtonContainer} from "../shared_comps/Styles";
import styled from "styled-components";
import colors from "../../Colors";
import Card from "../Card/Card";





const Prices = () => {
    return (
        <PricesContainer className={"row"}>
            <h4 name="prices">Prices</h4>

            <Card num={5} ppmeal={14} />
            <Card num={7} ppmeal={13} />
            <Card num={10} ppmeal={11} />
            <Card num={12} ppmeal={10} />
        </PricesContainer>
    );
};

export default Prices;

const PricesContainer = styled.div`
  height: 100%;
  grid-area: price;
  color : ${colors.secondaryTwo};

`
