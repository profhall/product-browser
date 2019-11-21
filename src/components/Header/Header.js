import React from 'react';
import styled from 'styled-components'
import plateIcon from './assets/lunch-box.svg';


const Header = () => {
    return (
        <TheHeader>
            <HeaderIcon src={plateIcon} />
            <HeaderTitle> Products </HeaderTitle>
            {/*https://www.eatthismuch.com/food/nutrition/young-green-jackfruit-in-brine,474598/*/}
        </TheHeader>
    );
};

const TheHeader = styled.div`
  //width: 100%;
  height: 7%;
  background-color: #333333 ;
  color: white;
  display: flex;
  padding: 0 7px;
`;

const HeaderIcon = styled.img`
  height: 75%;
  align-self: center;
`;
const HeaderTitle = styled.h2`
  //height: 75%;
  align-self: center;
  margin: auto;
  
`;

export default Header;
