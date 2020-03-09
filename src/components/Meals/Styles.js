import styled from "styled-components";

export const MealsSelectorContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding-top:10px;
  grid-area: content;
  flex-direction: column;
  justify-content: space-between;
  
  padding-bottom: 15px;
`;

export const Mains = styled.div`
  width: 100%;
  grid-area: mains;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
   
`;

export const MainHeader = styled.div`
  display: grid;
  grid-area: mainhead;
  height: 30%;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'text text';
  
`;

export const MainHeaderText = styled.div`
  display: flex;
  height: 95%;
  width: 100%;
  grid-area: text;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ChosenMealsList = styled.div`
  text-align: left;
  padding: 0 30px !important;
  width: 95%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255,255,255, .2);
`;


