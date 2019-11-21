import React, {useState} from 'react';
import styled from "styled-components";


const Main = () => {
    const handleResize = ()=>{
        console.log("window resize")
        setWidth(getWidth());
    };
    function getWidth() {
        return window.innerWidth
    }

    const [windowWidth, setWidth] = useState(getWidth);



    console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);


    return (
        <TheMainContent width={windowWidth}>
            <Products > {windowWidth} </Products>
            <Favs/>
        </TheMainContent>
    );
};

const TheMainContent = styled.div`
  display: grid;
  grid-template-columns: ${props => {
      console.log(props.width)
      return(props.width > 749 ? "'69% 30%'" : "'100%'")
  }
};
  grid-template-rows: 100%;
  grid-template-areas:${props => props.width > 749 ? "'products cart'" : "'products'"};
  grid-gap: 1% ;
  height: 75%;
`;

const Products = styled.div`
  border: 1px solid orangered;
  border-radius: 25px;
  grid-area: products;
`;

const Favs = styled.div`
  border: 1px solid orangered;
  border-radius: 25px;
  grid-area: cart;
`;

export default Main;
