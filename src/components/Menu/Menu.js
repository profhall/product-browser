import React, {useContext} from 'react';
import styled from "styled-components";
import colors from "../../Colors";
import {AuthContext, AuthProvider} from "../../Auth/Auth";

const Menu = () => {
    const {gotoPage} = useContext(AuthContext)

    return (
        <TheMenu>
            <h2> These Are The Meals For the Week</h2>

            <ButtonContainer className={"row "}>
                <Button className={"btn-large col m5"} onClick={()=>gotoPage("/#")}>Salads</Button>
                <Button className={`btn-large col  m5 ${0>1?"":"disabled"}`} onClick={()=>gotoPage("/#")}>Meals</Button>
            </ButtonContainer>
        </TheMenu>
    );
};

export default Menu;


const TheMenu = styled.div`
height:100%;
width: 100%;
grid-area: content;
display: flex;
flex-direction: column;
justify-content: space-between;
    `



/*
Buttons Styling
 */

const Button = styled.button`
    color:white;
    margin: 7px !important;
    height: ${props=> props.height ? props.height:" "};
    background-color: ${colors.bright};
    &:hover {
      background-color: ${colors.secondaryTwo};
    }
`

const ButtonContainer = styled.div`
  grid-area: button;  
  display: flex;
  width: 100%;
  justify-content:center;

`;