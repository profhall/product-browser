import styled from "styled-components";
import colors from "../Colors";

export const Button = styled.button`
  //width: 65%;
  align-self: center;
  margin-left: 0 !important;
  background-color: ${colors.secondaryTwo} !important;
  &:hover {
    background-color: ${colors.bright}  !important;
  }
`;

export const ButtonContainer = styled.div`
  grid-area: button;  
  width: 90%;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  

`;

