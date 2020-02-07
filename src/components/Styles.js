import styled from "styled-components";
import colors from "../Colors";

export const Button = styled.button`
  width:  ${props=>props.width ? props.width : ""}  ;
  align-self: center;
  margin-left: 0 !important;
  background-color: ${props=>props.bgcolor? props.bgcolor : colors.secondaryTwo} !important;
  &:hover {
    background-color: ${colors.bright}  !important;
  }
  color: ${props=>props.color ? props.color : "white"}  ;
  border:  ${props=>props.border ? props.border : "default"}  ;
`;

export const ButtonContainer = styled.div`
  grid-area: button;  
  width: 90%;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  height:  ${props=>props.height ? props.height : "default"}  ;


`;

