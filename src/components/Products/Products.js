import React,{useState, useEffect} from 'react';
import Product from "../Product/Product";
import {meals} from '../../data'
import styled from "styled-components";


const stuff = meals

const Products = ({addToFavs}) => {

    const [windowWidth, setWidth] = useState(getWidth());
    const [chosenItems, setFavs] = useState( []);
    const productList = stuff.map((item) => {
            return  <Product addToFavs={()=>addToFavs(item)} windowWidth={windowWidth} item={item}/>
        }
    );

    useEffect(() => {
        setWidth(getWidth());
    });

    function getWidth () {
        return window.innerWidth
    };

    const handleResize = ()=>{
        console.log("window resize")
        setWidth(getWidth());
    };
    window.addEventListener('resize', handleResize);

    // const addToFavs=(item)=> {
    //     // chosenItems.push(<li>{item.name}</li>)
    //
    //     let items = []
    //     chosenItems.includes(item.name) ? items = chosenItems : items = chosenItems.concat(item.name);
    //     console.log(items)
    //     setFavs(items)
    // };

    return (
        <ProductsContainer width={windowWidth}  >
            {productList}
        </ProductsContainer>
    );
};

export default Products;


const ProductsContainer = styled.div`
  //border: 1px solid orangered;
  grid-area: main;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;