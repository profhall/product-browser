import React from "react";
import styled from "styled-components";
import colors from "../../Colors";

const Card = ({num, ppmeal, onClick})=> <div className="col s12 m6 l3" onClick={onClick}>
    <div className="card " style={{borderRadius:"10px 10px 0 0"}}>
        <CardDiv className="card-content center ">
            <span className="card-title">{num} Meals</span>
            <b><h4>${num*ppmeal}.00</h4></b>

        </CardDiv>
        <div className="card-action center" style={{color:colors.secondaryTwo}}>

            <b><p>${ppmeal}/meal</p></b>
        </div>
    </div>
</div>



export default Card


const CardDiv = styled.div`
  color : ${colors.bright} !important;
  background-color: ${colors.secondaryTwo};
  border-radius: 10px 10px 0 0 !important;
  &:hover {
    background-color: ${colors.bright} !important;
    color : ${colors.secondaryTwo} !important;
  }
`;